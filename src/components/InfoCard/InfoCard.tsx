import React, { Component } from 'react';
import { TouchableOpacity ,View, Text, StyleSheet, Image } from 'react-native';

import CustomText from '../CustomText/CustomText';
import {styles} from './style';
import {IconStyles} from '../../style/common';


import {Icons} from '../../resources/index';

// create a component
class InfoCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.container_cardInfo}>
                    <Image style={[styles.container_cardInfo_icon, IconStyles.med_icon]} source={Icons.server} />
                    <View style={styles.container_cardInfo_detailsContainer}>
                        <CustomText textFont="h2" isBold={false} style={[styles.text]}>Server name</CustomText>
                        <CustomText >author</CustomText>
                    </View>               
                </TouchableOpacity>
                <View style={styles.container_detailsBtn}>
                    <Image style={[IconStyles.sm_icon]} source={Icons.kebabMenu} />
                </View>
            </View>
            
        );
    }
}

export default InfoCard;
