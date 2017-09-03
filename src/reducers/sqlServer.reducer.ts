import * as Store from '../store/index';
import {ActionTypeKeys, IAction} from '../constants/action_types';

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
      case ActionTypeKeys.OTHER_ACTION:
        const newValue = action.payload
        return state;
      default:
        return state;
    }
  }