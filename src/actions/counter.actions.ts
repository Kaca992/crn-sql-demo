import {ActionTypeKeys} from '../constants/action_types';

export function incrementCounter(payload: number) {
  return (dispatch, newState) => {
    dispatch({
      type: ActionTypeKeys.INCREMENT_COUNTER,
      payload});
  };
}
  
export function resetCounter(){
  return (dispatch, newState) => {
    dispatch({
      type: ActionTypeKeys.RESET_COUNTER});
  };
}