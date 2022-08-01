import { createBrowserHistory } from 'history';
import { combineReducers } from 'redux';
import { createReduxHistoryContext } from 'redux-first-history';
import { characterInfoReducer } from './characterInfoReducer';
import { peopleReducer } from './peopleReducer';

const { routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

export const rootReducer = combineReducers({
  router: routerReducer,
  people: peopleReducer,
  character: characterInfoReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
