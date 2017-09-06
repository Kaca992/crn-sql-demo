import {StackNavigator, TabNavigator} from 'react-navigation';
import Expo from 'expo';

import Main from './main/Main';
import AddEditServer from './addEditServer/AddEditServer';
import Details from './details/Details';
import Overview from './details/Overview/Overview';
import Performance from './details/Performance/Performance';

import {NAVIGATION_BG_COLOR, NAVIGATION_TEXT_COLOR} from '../style/common';

const DetailsTabNavigator = TabNavigator({
  Overview: {
    screen: Overview,

  },
  Performance: {
    screen: Performance,
  }
});

export const AppStackNavigator = StackNavigator({
    Home: {
      screen: Main,

    },
    Details: {
      screen: DetailsTabNavigator,
    },
    AddServer : {
      screen: AddEditServer,
      navigationOptions: {
        title: 'New Server',
        headerTitle: 'New Server'}
    },
    EditServer : {
      screen: AddEditServer,
      navigationOptions: {
        title: 'Edit Server',
        headerTitle: 'Edit Server'}
    },
  },{
    navigationOptions: { headerStyle: { backgroundColor:NAVIGATION_BG_COLOR, marginTop: Expo.Constants.statusBarHeight }, headerTintColor: NAVIGATION_TEXT_COLOR }
  });