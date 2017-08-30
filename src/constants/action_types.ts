export enum ActionTypeKeys {
    INCREMENT_COUNTER = "INCREMENT_COUNTER",
    RESET_COUNTER = "RESET_COUNTER",

    OTHER_ACTION = "__any_other_action_type__"
}

//now we can infere in reducer what fields are avaliable depending on the type of action
export type Action = {
    type: ActionTypeKeys.INCREMENT_COUNTER | ActionTypeKeys.RESET_COUNTER,
    payload?: any,
    error?: any
} | {
    type: ActionTypeKeys.OTHER_ACTION,
    test:number
}
