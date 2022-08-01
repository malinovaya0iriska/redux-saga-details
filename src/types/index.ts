export interface IPeopleState {
  page: number;
  search: string;
  loading: boolean;
  error: string | null;
  data: IPeopleData;
}

export interface ICharacterInfoState {
  loading: boolean;
  error: string | null;
  data: ICharacter;
}

export interface ICharacter {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface IPeopleData {
  count: number;
  next: string | null;
  previous: null | string;
  results: ICharacter[];
}

export interface PeoplePayload {
  search: string;
  page: number;
}
