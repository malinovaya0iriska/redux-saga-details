import { IPeopleData, PeoplePayload } from '../../types';
import { ICharacter } from './../../types/index';

export const GET_PEOPLE = 'peopleActionTypes/GET_PEOPLE';
export interface GetPeopleAction {
  type: typeof GET_PEOPLE;
  payload: PeoplePayload;
}

export const GET_PEOPLE_REQUEST = 'peopleActionTypes/GET_PEOPLE_REQUEST';
export interface GetPeopleRequestAction {
  type: typeof GET_PEOPLE_REQUEST;
}

export const GET_PEOPLE_SUCCESS = 'peopleActionTypes/GET_PEOPLE_SUCCESS';
export interface GetPeopleSuccessAction {
  type: typeof GET_PEOPLE_SUCCESS;
  payload: IPeopleData;
}

export const GET_PEOPLE_FAILURE = 'peopleActionTypes/GET_PEOPLE_FAILURE';
export interface GetPeopleFailureAction {
  type: typeof GET_PEOPLE_FAILURE;
  payload: Error | string; // TODO
}

export const GET_CHARACTER_INFO_SUCCESS =
  'peopleActionTypes/GET_CHARACTER_INFO_SUCCESS';
export interface GetCharacterInfoSuccessAction {
  type: typeof GET_CHARACTER_INFO_SUCCESS;
  payload: ICharacter;
}

export const GET_CHARACTER_INFO_FAILURE =
  'peopleActionTypes/GET_CHARACTER_INFO_FAILURE';
export interface GetCharacterInfoFailureAction {
  type: typeof GET_CHARACTER_INFO_FAILURE;
  payload: { error: Error | string }; // TODO
}

export const GET_CHARACTER_INFO = 'peopleActionTypes/GET_CHARACTER_INFO';
export interface GetCharacterInfoAction {
  type: typeof GET_CHARACTER_INFO;
  payload: { id: string };
}

export type PeopleAction =
  | GetPeopleAction
  | GetPeopleRequestAction
  | GetPeopleSuccessAction
  | GetPeopleFailureAction
  | GetCharacterInfoAction
  | GetCharacterInfoSuccessAction
  | GetCharacterInfoFailureAction;
