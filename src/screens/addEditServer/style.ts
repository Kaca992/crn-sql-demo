import { StyleSheet } from 'react-native';
import {INPUT_BG_COLOR, INPUT_TEXT_COLOR, PRIMARY_COLOR, PRIMARY_TEXT_COLOR} from '../../style/common';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginHorizontal: 20,
    },

    headerElement: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'black',
        marginTop: 20,
        marginBottom: 10
    },

    inputElement: {
        height: 40,
        paddingLeft: 5,
        backgroundColor: INPUT_BG_COLOR,
        color: INPUT_TEXT_COLOR
    },

    submitButton: {
        backgroundColor: PRIMARY_COLOR,
        padding: 10,
        margin: 15,
        height: 40,
     },
     submitButtonText:{
        color: PRIMARY_TEXT_COLOR
     }
});