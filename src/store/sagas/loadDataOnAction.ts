/* eslint-disable @typescript-eslint/ban-ts-comment */
import { actionChannel, apply, call, put, take } from 'redux-saga/effects';
import { BASE_URL } from '../../api';

// pattern take + call + actionChannel
// collect all actions and execute them one by one

export default function* loadDataOnAction() {
  // @ts-ignore
  const channel = yield actionChannel('LOAD_DATA');
  while (true) {
    // @ts-ignore
    yield take(channel);

    // @ts-ignore
    yield call(fetchDataOnAction);
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
