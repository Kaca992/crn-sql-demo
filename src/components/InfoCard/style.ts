import { StyleSheet } from 'react-native';
import * as common from '../../style/common';
import * as helpers from '../../style/helpers';

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: common.PRIMARY_COLOR,
        paddingHorizontal: helpers.mhscale(20),
        minHeight: 128
    },
    container_cardInfo: {
        flex:10,
        flexDirection: 'row'
    },
    container_cardInfo_icon:{
        alignSelf:'flex-start'
    },
    container_cardInfo_detailsContainer:{
        flex:2,
        flexDirection:'column',
        alignItems: 'flex-start'
    },
    container_detailsBtn:{
        flex:1
    },
    text:{
        color: 'red'
    }
});

export {styles};