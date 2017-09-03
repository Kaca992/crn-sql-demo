import { StyleSheet } from 'react-native';
import {BACKGROUND_COLOR} from '../../../style/common';
import {mhscale, mvscale} from '../../../style/helpers';

// define your styles
export const styles = StyleSheet.create({
    actionContainer: {
        flex: 0,
        flexDirection: 'column',
        alignSelf: 'stretch',
        height: mvscale(220) ,
        backgroundColor: BACKGROUND_COLOR,
        marginTop: mvscale(100),
        marginHorizontal: mhscale(40),
        alignItems:'flex-start',
        justifyContent:'flex-start',
        borderRadius: 5      

    },

    header: {
        flex: 1,
        alignSelf:'center',
        maxHeight:40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#DDDDDD',
        marginBottom: 10
    },

    actionElement: {
        flex: 1,
        marginHorizontal: 10,
        marginBottom: 5,
        maxHeight:36
    }
});


