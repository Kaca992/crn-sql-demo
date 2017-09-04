import {ActionTypeKeys} from '../constants/action_types';

export function removeSqlConnection(sqlServerID: string) {
  return (dispatch, newState) => {
    dispatch({
      type: ActionTypeKeys.REMOVE_SQL_CONNECTION,payload:{sqlServerID}});
  };
}
  