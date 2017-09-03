import { StyleSheet } from 'react-native';
import * as common from '../../style/common';
import * as helpers from '../../style/helpers';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center'      
    },

    serverListContainer: {
        flex: 1,
        alignSelf:'stretch'
    }
});

export {styles};