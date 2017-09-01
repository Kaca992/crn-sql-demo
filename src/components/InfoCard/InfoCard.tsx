import React, { Component } from 'react';
import { TouchableOpacity ,View, Text, StyleSheet, Image } from 'react-native';

import CustomText from '../CustomText/CustomText';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {styles} from './style';
import {ICON_SIZES} from '../../style/common';

interface InfoCardProps {
    title: string,
    subTitle?: string,
    iconName?: string,

    //tag list
    //onClick
    //elementId
    //pop up setup
}

// create a component
class InfoCard extends Component<InfoCardProps, {}> {
    constructor(props: InfoCardProps){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.container_cardInfo}>
                    {
                        this.props.iconName ? <MaterialCommunityIcons style={styles.container_cardInfo_icon} name="server" size={ICON_SIZES.med} /> : null
                    }
                    
                    <View style={styles.container_cardInfo_detailsContainer}>
                        <CustomText isBold={true}>{this.props.title}</CustomText>
                        {
                            this.props.iconName ? <CustomText isItalic={true}>{this.props.subTitle}</CustomText> : null
                        }                       
                    </View>               
                </TouchableOpacity>
                <View style={styles.container_detailsBtn}>
                    <MaterialCommunityIcons name="dots-vertical" size={ICON_SIZES.med} color='grey' />
                </View>
            </View>
            
        );
    }
}

export default InfoCard;
