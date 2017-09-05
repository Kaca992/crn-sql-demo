import { combineReducers } from 'redux'
import {sqlServerReducer, ISQLServerState} from './sqlServer.reducer';

const reducersApp = combineReducers({
    sqlServerReducer
  })


export interface IStore {
  sqlServerReducer: ISQLServerState
}  

export default reducersApp
