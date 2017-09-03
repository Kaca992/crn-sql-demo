import React, { Component } from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {ICON_TYPES, ICON_SIZES} from './style';

import CustomText, {TextFontType} from '../CustomText';

import {styles} from './style';

interface IIconProps {
    name: string,
    size: ICON_TYPES,
    text?: string,
    textSize?: TextFontType,
    color?: string,
    style?: any
}

class Icon extends Component<IIconProps, any> {
    constructor(props, context) {
        super(props, context);
        
    }
    
    render() {
        return (
            <View style={this.props.style}>
                <MaterialCommunityIcons name={this.props.name} size={ICON_SIZES[this.props.size]} color={this.props.color} />
                {this.props.text ? <CustomText color={this.props.color} textFont={this.props.textSize}>{this.props.text}</CustomText> : null}
            </View>
            
        );
    }
}

export {Icon, IIconProps};
