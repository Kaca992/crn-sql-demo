import React, { Component } from 'react';
import { TouchableOpacity ,View, Text, StyleSheet, Image } from 'react-native';
import {autobind} from 'core-decorators';

import CustomText from '../CustomText';
import Icon, {IIconProps} from '../Icon';

import {styles} from './style';


interface InfoCardProps {
    itemID: string,
    title: string,
    subTitle?: string,
    iconName?: string,

    detailsBtnOptions?: IIconProps

    onDetailsClick?: (elementID: string) => any
    onClick?: (elementID: string) => any 
    // TODO tag list
}

// create a component
class InfoCard extends Component<InfoCardProps, {}> {
    constructor(props: InfoCardProps){
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.container_cardInfo} onPress={this._onInfoCardClicked}>
                    {
                        this.props.iconName ? <Icon style={styles.container_cardInfo_icon} name="server" size="med" /> : null
                    }
                    
                    <View style={styles.container_cardInfo_detailsContainer}>
                        <CustomText isBold={true}>{this.props.title}</CustomText>
                        {
                            this.props.iconName ? <CustomText isItalic={true}>{this.props.subTitle}</CustomText> : null
                        }                       
                    </View>               
                </TouchableOpacity>
                {
                    this.props.detailsBtnOptions ?
                        <TouchableOpacity style={styles.container_detailsBtn} onPress={this._onDetailsClicked}>
                            <Icon {...this.props.detailsBtnOptions} />                   
                        </TouchableOpacity>  : null
                }               
            </View>
            
        );
    }

    @autobind
    _onInfoCardClicked() {
        if(this.props.onClick) {
            this.props.onClick(this.props.itemID);
        }
    }

    @autobind
    _onDetailsClicked() {
        if(this.props.onDetailsClick){
            this.props.onDetailsClick(this.props.itemID);
        }       
    }
}

export {InfoCard, InfoCardProps};
