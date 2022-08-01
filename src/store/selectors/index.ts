import { ICharacterInfoState, IPeopleState } from '../../types';
import { AppStateType } from '../reducers';

export const getPeople = (store: AppStateType): IPeopleState => store.people;
export const getCharacterDetails = (store: AppStateType): ICharacterInfoState =>
  store.character;
