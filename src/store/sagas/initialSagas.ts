/* eslint-disable @typescript-eslint/ban-ts-comment */
import { all, call, delay, fork } from 'redux-saga/effects';
import { BASE_URL } from '../../api';

export function* auth() {
  yield delay(2000);
  console.log('auth is ok');

  return true;
}

export function* loadUsers() {
  // @ts-ignore
  const request = yield call(fetch, `${BASE_URL}/people`);
  // @ts-ignore
  const data = yield call([request, request.json]);

  console.log(data);
}

export default function* loadStartData() {
  yield all([fork(auth), fork(loadUsers)]);
}
