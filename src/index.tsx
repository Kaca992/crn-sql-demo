import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {Provider} from 'react-redux'
import configureStore from './store';
import {AppStackNavigator} from './screens/register_screens';

const store = configureStore({});

export default class App extends React.Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator /> 
      </Provider>
    )
  }
}
