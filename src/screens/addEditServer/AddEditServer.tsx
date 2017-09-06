import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {NavigationScreenProp, NavigationStackScreenOptions} from "react-navigation";
import { autobind } from 'core-decorators';

import CustomText from '../../components/common/CustomText';

import {ISQLServer} from '../../data/model/ISQLServer';
import {ICredential} from '../../data/model/ICredential';

import {addSqlConnection} from '../../actions/sqlServer.actions';

import {styles} from './style';

interface IAddEditServerProps {
    navigation : NavigationScreenProp<any, any>,

    onSaveChangesClicked: (sqlInformation: ISQLServer) => any
}

interface IAddEditServerState {
    isEdit: boolean,
    server: ISQLServer,
    credential: ICredential
}

function mapDispatchToProps(dispatch):any {
    return {
    onSaveChangesClicked: (sqlInformation: ISQLServer) => dispatch(addSqlConnection(sqlInformation))
    }
}

// create a component
class AddEditServer extends Component<IAddEditServerProps, IAddEditServerState> {   
    constructor(props, context) {
        super(props, context);
        const { params } = this.props.navigation.state;

        this.state = {...params};
    }
    
    render() {
        let fqdn = this.state.server ? this.state.server.fqdn : undefined;

        return (
            <View style={styles.container}>
                <View>
                    <CustomText style={styles.headerElement} isBold={true} textFont='h2'>SQL Server</CustomText>
                    <TextInput style={styles.inputElement}
                            onChangeText={(serverFqdn) => this.setState({server : {...this.state.server ,fqdn: serverFqdn} })} 
                            value={fqdn}
                            underlineColorAndroid = "transparent" 
                            placeholder = "Enter server name"/>
                </View>
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {this._onSubmitClick} >
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        );
    }

    @autobind
    _onSubmitClick() {
        let sqlServer : ISQLServer = {
            id: "",
            fqdn: this.state.server.fqdn,
            credentialId: "0"
        };

        this.props.onSaveChangesClicked(sqlServer);
        this.props.navigation.goBack();
    }
}

export default connect(
    null,
    mapDispatchToProps
  )(AddEditServer);
