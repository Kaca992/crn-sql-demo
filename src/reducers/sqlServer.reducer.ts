import * as Store from '../store/index';
import {ActionTypeKeys, IAction} from '../constants/action_types';
import Immutable from 'seamless-immutable';
import * as _ from "lodash"; 

import {ISQLServer} from '../data/model/ISQLServer';

import {TestServers, TestServersById} from '../test/testData';

export interface ISQLServerState {
    sqlServersById: {[sqlServerId: string]: ISQLServer},
    allSqlServersIds: string[],
    sqlServerPrimaryKeyCounter: number
}

const initialState = Immutable({
    sqlServersById: TestServersById,
    allSqlServersIds: TestServers,
    sqlServerPrimaryKeyCounter: 4
})
  
export function sqlServerReducer(state = initialState, action: IAction) {
    switch (action.type) {
      case ActionTypeKeys.REMOVE_SQL_CONNECTION:
        const sqlID = action.payload.sqlServerID;
        let newSqlServersById = _.omit(state.sqlServersById, sqlID);
        let newAllServersId = _.filter(state.allSqlServersIds, sqlServerId => {
          return sqlServerId !== sqlID;
        });

        return state.set('sqlServersById', newSqlServersById)
                    .set('allSqlServersIds', newAllServersId);
      case ActionTypeKeys.ADD_SQL_CONNECTION:
        let sqlInformation = action.payload.sqlServerInfo as ISQLServer;
        sqlInformation.id = state.sqlServerPrimaryKeyCounter.toString();

        let concatedServers = _.concat(state.allSqlServersIds, [sqlInformation.id]);
        return state.merge({
          sqlServerPrimaryKeyCounter: state.sqlServerPrimaryKeyCounter + 1,
          allSqlServersIds: concatedServers,
          sqlServersById: Immutable(state.sqlServersById).merge({[sqlInformation.id]: sqlInformation})
        });
      case ActionTypeKeys.OTHER_ACTION:
        const newValue = action.payload
        return state;
      default:
        return state;
    }
  }