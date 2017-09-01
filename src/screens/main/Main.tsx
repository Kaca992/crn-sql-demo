import * as React from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Button } from "react-native";
import {NavigationScreenProp, NavigationStackScreenOptions} from "react-navigation";
import * as SCREEN from '../../constants/screen_keys';

import InfoCard from '../../components/InfoCard/InfoCard';

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
                <Button title="Go To Details" onPress={() => navigate(SCREEN.DETAILS)} />
                <InfoCard />
            </View>
        );
    }

    _counterClicked(value: number){
        this.props.onCounterClicked(value);
    }

    _counterReset(){
        this.props.onResetClicked();
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
