import * as Store from '../store/index';
import {ActionTypeKeys, IAction} from '../constants/action_types';
import Immutable from 'seamless-immutable';
import * as _ from "lodash"; 

import {ICredential} from '../data/model/ICredential';

import {TestCredentials, TestCredentialsById} from '../test/testData';

export interface ICredentialState {
    credentialsById: {[credentialId: string]: ICredential},
    allCredentialIds: string[],
    credentialPrimaryKeyCounter: number
}

const initialState = Immutable({
    credentialsById: TestCredentialsById,
    allCredentialIds: TestCredentials,
    sqlServerPrimaryKeyCounter: 2
})
  
export function credentialsReducer(state = initialState, action: IAction) {
    switch (action.type) {
      default:
        return state;
    }
  }