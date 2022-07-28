/* eslint-disable @typescript-eslint/ban-ts-comment */
import { apply, call, cancel, fork, put, take } from 'redux-saga/effects';
import { BASE_URL } from '../../api';

// pattern take + fork - the most common pattern for React + Saga
// fork creates non-blocking requests, parallel tasks

export default function* loadDataOnAction() {
  let task;
  let abortController = new AbortController();
  while (true) {
    // @ts-ignore
    yield take('LOAD_DATA');

    if (task) {
      abortController.abort();
      yield cancel(task);

      abortController = new AbortController();
    }
    // @ts-ignore
    task = yield fork(fetchDataOnAction, abortController.signal);
  }
}

export function* fetchDataOnAction(signal: any) {
  console.log('Fetching started .... ');

  // @ts-ignore
  const response = yield call(fetch, `${BASE_URL}/planets`, { signal });
  // @ts-ignore
  const data = yield apply(response, response.json);
  console.log('PLANETS', data);

  yield put({ type: 'PLANETS_LOADED', payload: data });
}
