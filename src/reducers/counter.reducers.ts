import * as Store from '../store/index';
import {Action, ActionTypeKeys} from '../constants/action_types';

interface ICounterState {
    value: number;
}

const initialState: ICounterState = {
    value: 0,
}
  
export function counterReducer(state: ICounterState = initialState, action: Action): ICounterState {
    const { value } = state
    switch (action.type) {
      case ActionTypeKeys.INCREMENT_COUNTER:
        const newValue = value + action.payload
        return { value: newValue }
      case ActionTypeKeys.RESET_COUNTER:
        return { value: 0 }
      default:
        return state;
    }
  }