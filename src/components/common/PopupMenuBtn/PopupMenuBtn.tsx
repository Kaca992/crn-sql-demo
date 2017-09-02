import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers
} from 'react-native-popup-menu';
import Icon, {ICON_TYPES, IIconProps} from '../Icon';

import {styles} from './style';

interface IMenuAction {
  text: string,
  actionID: string,
  icon?: IIconProps,
  isDisabled?: boolean,
  style?: any
}

interface IPopupMenuBtnProps {
    menuIcon: string,
    menuIconSize: ICON_TYPES,
    menuIconColor: string,
    menuActions: IMenuAction[],

    menuStyle?: any,
    menuOptionStyle?: any,

    onActionSelect?: (actionID: string) => any
}

// create a component
class PopupMenuBtn extends Component<IPopupMenuBtnProps, any> {
    constructor(props, context) {
      super(props, context);
      
    }
    
    render() {
        return (
          <Menu style={this.props.menuStyle}>
            <MenuTrigger>
              <Icon name={this.props.menuIcon} size={this.props.menuIconSize} color={this.props.menuIconColor} />
            </MenuTrigger>
            <MenuOptions style={this.props.menuOptionStyle}>
              {
                this.props.menuActions.map((menuAction, index) => {
                    return (
                      <MenuOption style={menuAction.style} key={index} disabled={menuAction.isDisabled}>
                        {
                          menuAction.icon ? <Icon {...menuAction.icon} text={menuAction.text}/> : <Text>{menuAction.text}</Text>
                        }
                      </MenuOption>
                    )
                })
              }
            </MenuOptions>  
          </Menu>
        );
    }
}

export {PopupMenuBtn, IPopupMenuBtnProps, IMenuAction};
