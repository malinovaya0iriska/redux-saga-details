interface ICharacter {
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
interface IRootData {
  people: ICharacter[];
}

const initialState = {
  people: [],
};

export const rootReducer = (state: any = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_PEOPLE':
      return { ...state, people: [...state.people, ...payload] };
    default:
      return state;
  }
};
