/* eslint-disable @typescript-eslint/ban-ts-comment */
import { call, put, takeEvery } from 'redux-saga/effects';
import { getPeople } from '../../api';

// business logic
export function* workerSaga() {
  // @ts-ignore
  const data = yield call(getPeople, '/people');

  yield put({ type: 'SET_PEOPLE', payload: data.results });
}

// actions
export function* watchClickSaga() {
  yield takeEvery('LOAD_DATA', workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
