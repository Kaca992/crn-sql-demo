import { combineReducers } from 'redux'
import {sqlServerReducer, ISQLServerState} from './sqlServer.reducer';
import {credentialsReducer, ICredentialState} from './credentials.reducer';

const reducersApp = combineReducers({
    sqlServerReducer,
    credentialsReducer
  })


export interface IStore {
  sqlServerReducer: ISQLServerState,
  credentialsReducer: ICredentialState
}  

export default reducersApp
