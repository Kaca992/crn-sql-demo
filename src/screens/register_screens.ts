import {StackNavigator} from 'react-navigation';
import Main from './main/Main';
import Details from './details/Details';

export const ModalStack = StackNavigator({
    Home: {
      screen: Main,

    },
    Details: {
      screen: Details,
    },
  });