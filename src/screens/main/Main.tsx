import * as React from "react";
import { Button, StyleSheet, View } from "react-native";
import {NavigationScreenProp, NavigationStackScreenOptions} from "react-navigation";
import { connect } from "react-redux";
import { autobind } from 'core-decorators';

import * as SCREEN from '../../constants/screen_keys';
import InfoCard from '../../components/common/InfoCard';

interface IMainProps {
    counterValue?: number;

    onCounterClicked?: (value: number) => any;
    onResetClicked?: () => any;
    navigation? : NavigationScreenProp<any, any>;
}

function mapStateToProps(state): IMainProps {
    return{
        counterValue: state.counterReducer.value
    }
}

function mapDispatchToProps(dispatch): IMainProps{
    return {
        // onCounterClicked: (value: number) => dispatch(counterActions.incrementCounter(value)),
        // onResetClicked: () => dispatch(counterActions.resetCounter())
    }
}

class Main extends React.Component<IMainProps, IMainProps> {
    static navigationOptions: NavigationStackScreenOptions = {
        title: 'SQL Demo',
        headerTitle: "SQL Demo"
      };

    constructor(props: IMainProps) {
        super(props);
      }

    render() {
        let value = this.props.counterValue ? this.props.counterValue : 0;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container} >
                <Button title="Go To Details" onPress={() => {this._navigateTo(SCREEN.DETAILS)}} />
                <InfoCard itemID="1" title='Dino-SQL' iconName='server' subTitle='test.local' onClick={this._onInfoClick} detailsBtnEnabled={true} 
                    detailsBtnOptions={{menuIcon:'dots-vertical', menuIconSize:'med', menuIconColor:'grey', menuActions:[{actionID:'Details', text:'Details'}]}}/>
                <InfoCard itemID="2" title='sql2014' iconName='server' subTitle='test.local' onClick={this._onInfoClick}/>
                <InfoCard itemID="3" title='test2323' iconName='server' subTitle='test.local' onClick={this._onInfoClick}/>
            </View>
        );
    }

    @autobind
    _onInfoClick(itemID: string) {
        alert(itemID);
    }

    @autobind
    _navigateTo(screen: string){
        const { navigate } = this.props.navigation;
        navigate(screen);
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main);
