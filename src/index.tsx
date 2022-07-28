import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { App } from './App';
import { Endpoint } from './constants';
import { Blog } from './containers/Blog';
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
          <Route path={Endpoint.HOME} element={<App />}></Route>
          <Route path={Endpoint.BLOG} element={<Blog />}></Route>
          <Route path={Endpoint.NOT_FOUND} element={<NotFound />}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);
