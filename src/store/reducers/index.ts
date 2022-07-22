const initialState = {};

export const rootReducer = (state: any = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
