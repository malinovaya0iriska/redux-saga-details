import { IPeopleData, IPeopleState } from '../../types';
import * as actions from '../actionTypes';

const initialPeopleState: IPeopleState = {
  page: 1,
  search: '',
  loading: false,
  error: null,
  data: {} as IPeopleData,
};

export const peopleReducer = (
  state: IPeopleState = initialPeopleState,
  action: any,
): IPeopleState => {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_PEOPLE: {
      const { page, search } = payload;
      return { ...state, page, search, loading: true };
    }
    case actions.GET_PEOPLE_SUCCESS: {
      return { ...state, data: payload, loading: false };
    }
    case actions.GET_PEOPLE_FAILURE: {
      return { ...state, error: payload, loading: false };
    }
    default:
      return state;
  }
};
