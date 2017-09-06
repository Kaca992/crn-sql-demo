import {ActionTypeKeys} from '../constants/action_types';
import {ISQLServer} from '../data/model/ISQLServer';

export function removeSqlConnection(sqlServerID: string) {
  return (dispatch, newState) => {
    dispatch({
      type: ActionTypeKeys.REMOVE_SQL_CONNECTION,payload:{sqlServerID}});
  };
}

export function addSqlConnection(sqlServerInfo: ISQLServer) {
  return (dispatch, newState) => {
    dispatch({
      type: ActionTypeKeys.ADD_SQL_CONNECTION,payload:{sqlServerInfo}});
  };
}
  