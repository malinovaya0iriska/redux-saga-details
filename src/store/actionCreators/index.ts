import { IPeopleData, PeoplePayload } from '../../types';
import * as actions from '../actionTypes';
import { ICharacter } from './../../types/index';

export const getPeople = (payload: PeoplePayload): actions.GetPeopleAction => {
  return {
    type: actions.GET_PEOPLE,
    payload,
  };
};

export const getPeopleSuccess = (
  payload: IPeopleData,
): actions.GetPeopleSuccessAction => {
  return {
    type: actions.GET_PEOPLE_SUCCESS,
    payload,
  };
};

export function getPeopleFailure(
  payload: Error | string,
): actions.GetPeopleFailureAction {
  return {
    type: actions.GET_PEOPLE_FAILURE,
    payload,
  };
}

export const getCharacterInfoSuccess = (
  payload: ICharacter,
): actions.GetCharacterInfoSuccessAction => {
  return {
    type: actions.GET_CHARACTER_INFO_SUCCESS,
    payload,
  };
};

export function getCharacterInfoFailure(payload: {
  error: Error | string;
}): actions.GetCharacterInfoFailureAction {
  return {
    type: actions.GET_CHARACTER_INFO_FAILURE,
    payload,
  };
}
export const getCharacterInfo = (payload: {
  id: string;
}): actions.GetCharacterInfoAction => {
  return {
    type: actions.GET_CHARACTER_INFO,
    payload,
  };
};
