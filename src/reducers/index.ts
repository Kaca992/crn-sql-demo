import { combineReducers } from 'redux'
import {counterReducer} from './counter.reducers';

const reducersApp = combineReducers({
    counterReducer
  })

  
export default reducersApp
