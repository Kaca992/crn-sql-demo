import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { autoRehydrate } from 'redux-persist';
import thunk from "redux-thunk";
import reducersApp from '../reducers';
import logger from './logger';

let middleware = [thunk, logger];

function configureStore(initialState){
    const store: any = createStore(reducersApp, composeWithDevTools(
        applyMiddleware(...middleware),
        autoRehydrate()
      ));

    return store;
}



export default configureStore;