import {StackNavigator} from 'react-navigation';
import Expo from 'expo';

import Main from './main/Main';
import Details from './details/Details';

export const ModalStack = StackNavigator({
    Home: {
      screen: Main,

    },
    Details: {
      screen: Details,
    }
  },{
    navigationOptions: { headerStyle: { marginTop: Expo.Constants.statusBarHeight } }
  });