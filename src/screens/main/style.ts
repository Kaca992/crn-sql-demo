import { StyleSheet } from 'react-native';
import {BACKGROUND_COLOR, PRIMARY_COLOR}  from '../../style/common';
import * as helpers from '../../style/helpers';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BACKGROUND_COLOR      
    },

    serverListContainer: {
        flex: 1,
        alignSelf:'stretch'
    }
});

const actionBtnColor = PRIMARY_COLOR;

export {styles, actionBtnColor};