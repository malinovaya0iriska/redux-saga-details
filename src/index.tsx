import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import App from './App';
import { AppRoute } from './constants';
import { Blog } from './containers/Blog';
import { CharacterInfo } from './containers/CharacterInfo';
import { NotFound } from './containers/NotFound';
import { history, store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Routes>
          <Route path={AppRoute.HOME} element={<App />} />
          <Route path={AppRoute.BLOG} element={<Blog />} />
          <Route path={`${AppRoute.PEOPLE}/:id`} element={<CharacterInfo />} />
          <Route path={AppRoute.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);
