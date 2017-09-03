import { combineReducers } from 'redux'
import {sqlServerReducer} from './sqlServer.reducer';

const reducersApp = combineReducers({
    sqlServerReducer
  })

  
export default reducersApp
