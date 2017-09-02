import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {Provider} from 'react-redux'
import configureStore from './store';
import {ModalStack} from './screens/register_screens';
import { MenuContext  } from 'react-native-popup-menu';

const store = configureStore({});

export default class App extends React.Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <MenuContext>
          <ModalStack />
        </MenuContext> 
      </Provider>
    )
  }
}