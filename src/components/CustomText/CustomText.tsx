import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as styles from './style';

interface ICustomTextProp {
    children: string,
    textFont?: styles.TextFontType,
    isBold?: boolean,
    style?: any
}

class CustomText extends Component<ICustomTextProp, any> {
    constructor(props: ICustomTextProp){
        super(props);
    }
    
    render() {
        let {textFont = "text", isBold = false} = this.props;

        const textStyles = [
                styles.TextSize[textFont],
                isBold ? styles.TextWeight.bold : styles.TextWeight.normal,
                this.props.style
        ];

        return (
            <Text style={textStyles}>{this.props.children}</Text>
        );
    }
}

export default CustomText;
