import React, { Component } from 'react';
import { Modal, TouchableOpacity,TouchableHighlight , View, Text } from 'react-native';
import {autobind} from 'core-decorators';

import CustomText from '../CustomText';
import Icon, {ICON_TYPES, IIconProps} from '../Icon';

import {styles} from './style';


interface IPopupMenuProps {  
    menuTitle?: string,
    modalStyle?: any,

    elementID: string,
    actions: Array<{actionKey: string, element: JSX.Element}>,
    isVisible: boolean,

    onMenuHide: () => void,
    onActionClick: (elementID: string, actionKey: string) => void
}

class PopupMenu extends Component<IPopupMenuProps, any> {
    constructor(props, context) {
      super(props, context);
      
    }
    
    render() {
        return (
          <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this._onModalHide}>
            <TouchableOpacity activeOpacity={1} onPress={this._onModalHide} style={{flex:1}}>
              <View style={[styles.actionContainer, this.props.modalStyle]}>
                  {this.props.menuTitle ? <CustomText style={styles.header} isBold={true} textFont='h2' >{this.props.menuTitle}</CustomText> : null}                 
                  {
                    this.props.actions.map(
                      (item) => {return(
                        <TouchableHighlight key={item.actionKey} onPress={() => this._onActionClicked(item.actionKey)}>
                          <View style={styles.actionElement}>
                            {item.element}
                          </View>
                        </TouchableHighlight>
                      )}
                    )
                  }                
                </View>
              </TouchableOpacity>
         </Modal>
        );
    }

    @autobind
    _onActionClicked(actionKey: string){
      this._onModalHide();
      this.props.onActionClick(this.props.elementID, actionKey);
    }

    @autobind
    _onModalHide() {
      this.props.onMenuHide();
    }
}

export {PopupMenu, IPopupMenuProps};
