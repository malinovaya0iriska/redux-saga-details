/* eslint-disable @typescript-eslint/ban-ts-comment */
import { apply, call, fork, put, take } from 'redux-saga/effects';
import { BASE_URL } from '../../api';

// pattern take + fork - the most common pattern for React + Saga
// fork creates non-blocking requests, parallel tasks

export default function* loadDataOnAction() {
  while (true) {
    // @ts-ignore
    yield take('LOAD_DATA');
    // @ts-ignore
    yield fork(fetchDataOnAction);
  }
}

export function* fetchDataOnAction() {
  console.log('Fetching started .... ');

  // @ts-ignore
  const response = yield call(fetch, `${BASE_URL}/planets`);
  // @ts-ignore
  const data = yield apply(response, response.json);
  console.log('PLANETS', data);

  yield put({ type: 'PLANETS_LOADED', payload: data });
}
