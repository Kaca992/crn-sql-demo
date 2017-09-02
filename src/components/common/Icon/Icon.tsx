import React, { Component } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {ICON_TYPES, ICON_SIZES} from './style';

interface IIconProps {
    name: string,
    size: ICON_TYPES,
    text?: string,
    color?: string,
    style?: any
}

class Icon extends Component<IIconProps, any> {
    constructor(props, context) {
        super(props, context);
        
    }
    
    render() {
        return (
            <MaterialCommunityIcons style={this.props.style} name={this.props.name} size={ICON_SIZES[this.props.size]} color={this.props.color}>
                {this.props.text}
            </MaterialCommunityIcons>
        );
    }
}

export {Icon, IIconProps};
