const initialState: IRootData = {
  people: [],
  planets: [],
};

export const rootReducer = (
  state: IRootData = initialState,
  action: any,
): IRootData => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_PEOPLE':
      return { ...state, people: [...state.people, ...payload] };
    case 'SET_PLANETS':
      return { ...state, planets: [...state.planets, ...payload] };
    default:
      return state;
  }
};

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
interface IPlanet {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}
interface IRootData {
  people: ICharacter[];
  planets: IPlanet[];
}
