import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducersApp from '../reducers';
import logger from './logger';

let middleware = [thunk, logger];

function configureStore(initialState){
    const store: any = createStore(reducersApp, composeWithDevTools(
        applyMiddleware(...middleware)
      ));

    return store;
}



export default configureStore;