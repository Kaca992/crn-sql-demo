export enum ActionTypeKeys {
    OTHER_ACTION = "__any_other_action_type__"
}

export interface IAction {
    type: ActionTypeKeys,
    payload?: any,
    error?: any
}
