import {StackNavigator, TabNavigator} from 'react-navigation';
import Expo from 'expo';

import Main from './main/Main';
import Details from './details/Details';
import Overview from './details/Overview/Overview';
import Performance from './details/Performance/Performance';

import {PRIMARY_COLOR} from '../style/common';

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
    }
  },{
    navigationOptions: { headerStyle: { backgroundColor:PRIMARY_COLOR,marginTop: Expo.Constants.statusBarHeight } }
  });