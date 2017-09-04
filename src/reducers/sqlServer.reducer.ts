import * as Store from '../store/index';
import {ActionTypeKeys, IAction} from '../constants/action_types';
import * as Immutable from 'seamless-immutable';

import {ISQLServer} from '../data/model/ISQLServer';

import {TestServers, TestServersById} from '../test/testData';

interface ISQLServerState {
    sqlServers: ISQLServer[],
    sqlServersById: {[sqlServerId: string]: ISQLServer}
}

const initialState: ISQLServerState = {
    sqlServers: TestServers,
    sqlServersById: TestServersById
}
  
export function sqlServerReducer(state: ISQLServerState = initialState, action: IAction): ISQLServerState {
    switch (action.type) {
      case ActionTypeKeys.REMOVE_SQL_CONNECTION:
        const sqlID = action.payload.sqlServerID;
        let sqlServers = state.sqlServers.filter(x => x.id !== sqlID);
        let sqlServersById = Immutable.from(state.sqlServersById);
        delete sqlServersById[sqlID];
        return {...state, sqlServers, sqlServersById};
      case ActionTypeKeys.OTHER_ACTION:
        const newValue = action.payload
        return state;
      default:
        return state;
    }
  }