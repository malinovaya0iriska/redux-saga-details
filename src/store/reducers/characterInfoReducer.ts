import { ICharacter, ICharacterInfoState } from '../../types';
import * as actions from '../actionTypes';

const initialCharacterState: ICharacterInfoState = {
  loading: false,
  error: null,
  data: {} as ICharacter,
};

export const characterInfoReducer = (
  state: ICharacterInfoState = initialCharacterState,
  action: any,
): ICharacterInfoState => {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_CHARACTER_INFO: {
      return { ...state, loading: true };
    }
    case actions.GET_CHARACTER_INFO_SUCCESS: {
      return { ...state, data: payload, loading: false, error: null };
    }
    case actions.GET_CHARACTER_INFO_FAILURE: {
      return { ...state, loading: false, error: payload.error };
    }
    default:
      return state;
  }
};
