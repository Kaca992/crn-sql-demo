import { StyleSheet } from 'react-native';
import * as common from '../../../style/common';
import * as helpers from '../../../style/helpers';

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: common.BACKGROUND_COLOR,
        paddingHorizontal: helpers.mhscale(10),
        minHeight: 84,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#DDDDDD',
    },
    container_cardInfo: {
        flex:10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
        container_cardInfo_icon:{
            paddingRight: 5
        },
        container_cardInfo_detailsContainer:{
            flex:2,
            flexDirection: 'column'
        },
    container_detailsBtn:{
        flex:1
    }
});

export {styles};