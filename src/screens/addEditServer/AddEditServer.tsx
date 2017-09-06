import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {NavigationScreenProp, NavigationStackScreenOptions} from "react-navigation";

import CustomText from '../../components/common/CustomText';

import {ISQLServer} from '../../data/model/ISQLServer';

import {styles} from './style';

interface IAddEditServerProps {
    navigation : NavigationScreenProp<any, any>
}

interface IAddEditServerState {
    isEdit: boolean,
    server: ISQLServer
}

// create a component
class AddEditServer extends Component<IAddEditServerProps, IAddEditServerState> {   
    constructor(props, context) {
        super(props, context);
        const { params } = this.props.navigation.state;

        this.state = {...params};
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <CustomText style={styles.headerElement} isBold={true} textFont='h2'>SQL Server</CustomText>
                    <TextInput style={styles.inputElement}
                            onChangeText={(serverId) => this.setState({server : {...this.state.server ,id: serverId} })} 
                            value={this.state.server.id}
                            underlineColorAndroid = "transparent" />
                </View>
                <View>
                    <CustomText style={styles.headerElement} isBold={true} textFont='h2'>Credentials</CustomText>
                </View>
            </View>
        );
    }
}

export default AddEditServer;
