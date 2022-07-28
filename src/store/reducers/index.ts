const initialState = { blog: {} };

export const rootReducer = (state: any = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case 'BLOG_LOADED':
      return { ...state, blog: payload };
    case 'PLANETS_LOADED':
      return { ...state, planets: payload };
    default:
      return state;
  }
};
