import * as React from "react";
import { Button, ScrollView, View, TouchableOpacity } from "react-native";
import {NavigationScreenProp, NavigationStackScreenOptions} from "react-navigation";
import { connect } from "react-redux";
import { autobind } from 'core-decorators';
import ActionButton from 'react-native-action-button';

import CustomText from '../../components/common/CustomText';
import Icon from '../../components/common/Icon';
import InfoCard from '../../components/common/InfoCard';
import PopupMenu from '../../components/common/PopupMenu';

import {removeSqlConnection} from '../../actions/sqlServer.actions';

import * as SCREEN from '../../constants/screen_keys';
import {ISQLServer} from '../../data/model/ISQLServer';

import {styles, actionBtnColor} from './style';

interface IMainProps {
    sqlServerList?: ISQLServer[],

    onDeleteItemClicked?: (elementID: string) => any,

    navigation? : NavigationScreenProp<any, any>
}

interface IMainState {
    modalIsVisible: boolean;
    serverSelected: string;
}

function mapStateToProps(state): IMainProps {
    return{
        sqlServerList: state.sqlServerReducer.sqlServers
    }
}

function mapDispatchToProps(dispatch): IMainProps{
    return {
        onDeleteItemClicked: (elementID: string) => dispatch(removeSqlConnection(elementID))
        // onCounterClicked: (value: number) => dispatch(counterActions.incrementCounter(value)),
        // onResetClicked: () => dispatch(counterActions.resetCounter())
    }
}

class Main extends React.Component<IMainProps, IMainState> {
    static navigationOptions: NavigationStackScreenOptions = {
        title: 'SQL Demo App',
        headerTitle: "SQL Demo App"
      };

    constructor(props: IMainProps) {
        super(props);

        this.state = {modalIsVisible: false, serverSelected: null};
      }

    render() {
        let actions = this._generateDetailsActions();
        let containerOpacity = this.state.modalIsVisible ? {opacity:0.6} : {opacity:1};

        return (
            <View style={[styles.container, containerOpacity]}>
                <PopupMenu menuTitle={this.state.serverSelected} elementID={this.state.serverSelected} actions={actions} isVisible={this.state.modalIsVisible} onMenuHide={this._onModalHide} onActionClick={this._onDetailsActionClicked}/>                   
                <ScrollView style={styles.serverListContainer}>
                    {this.props.sqlServerList.map(
                        (sqlServer) => this._renderItem(sqlServer)
                    )}
                </ScrollView>
                <ActionButton buttonColor={actionBtnColor} onPress={() => { alert("hi")}} />                
            </View>
        );
    }

    @autobind
    _renderItem(item: ISQLServer) {
        return(
            <InfoCard
                key={item.id} 
                itemID={item.id}
                title={item.sqlInstance}
                iconName='server'
                subTitle={item.domainName}
                onClick={this._onInfoClick}
                onDetailsClick={this._onDetailsClicked}
                detailsBtnOptions={{
                    name:'dots-vertical',
                    size:'med',
                    color:'grey'
                }}
                />
        );
    }
    
    @autobind
    _onInfoClick(itemID: string) {
        this.props.navigation.navigate(SCREEN.DETAILS, {itemID});
    }

    
    @autobind
    _navigateTo(screen: string){
        const { navigate } = this.props.navigation;
        navigate(screen);
    }

    @autobind
    _onDetailsClicked(elementID: string){
        this.setState({modalIsVisible: true, serverSelected: elementID});
    }

    @autobind
    _onDetailsActionClicked(elementID: string, actionKey: string){
        switch(actionKey){
            case "Details":
                this._onInfoClick(elementID);
                return;
            case "Remove":
                this.props.onDeleteItemClicked(elementID);
                return;
            default:
                alert("Action for" + elementID + "is " + actionKey);
        }       
    }

    @autobind
    _onModalHide(){
        this.setState({modalIsVisible: false, serverSelected:null});
    }

    _generateDetailsActions(): Array<{actionKey: string, element: JSX.Element}> {
        let actions : Array<{actionKey: string, element: JSX.Element}> = [];
        actions.push({actionKey: "Details", element:<Icon style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}} name="archive" size="med" text="Details"/> });
        actions.push({actionKey: "Edit", element: <Icon color="blue" style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}} name="pencil" size="med" text="Edit"/> });
        actions.push({actionKey: "Remove", element: <Icon color="red" style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}} name="delete" size="med" text="Remove"/> });

        return actions;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main);
