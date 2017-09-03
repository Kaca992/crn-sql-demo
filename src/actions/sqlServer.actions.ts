import {ActionTypeKeys} from '../constants/action_types';

export function incrementCounter(payload: number) {
  return (dispatch, newState) => {
    dispatch({
      type: ActionTypeKeys.OTHER_ACTION,
      payload});
  };
}
  