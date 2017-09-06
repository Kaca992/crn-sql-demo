import * as React from 'react'
import { Text,AsyncStorage  } from 'react-native'
import {Provider} from 'react-redux'
import { persistStore } from 'redux-persist';
import configureStore from './store';
import {AppStackNavigator} from './screens/register_screens';

const store = configureStore({});

export default class App extends React.Component<any, any> {
  constructor() {
    super()
    this.state = { rehydrated: false }
  }

  componentWillMount(){
    let persistor = persistStore(store, {storage: AsyncStorage}, () => {
      this.setState({ rehydrated: true })
    });

    // persistor.purge();
  }

  render() {
    if(!this.state.rehydrated){
      return <Text>Loading...</Text>
    }
    return (
      <Provider store={store}>
        <AppStackNavigator /> 
      </Provider>
    );
  }
}
