/* eslint-disable @typescript-eslint/ban-ts-comment */
import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { getData } from '../../api';

// business logic
// fork for parallel requests, call for consecutive requests
// non-blocking effects - fork, spawn, call - blocks queu
// FORK saga effect - error from parent tasks bubble up to their parents and cancell its further execution
// SPAWN - don't cancell parent tasks
export function* workerSaga() {
  yield fork(loadPeople);
  yield fork(loadPlanets);
}

// actions
export function* watchLoadDataSaga() {
  yield takeEvery('LOAD_DATA', workerSaga);
}

export default function* rootSaga() {
  yield fork(watchLoadDataSaga);
}

// function for creation of parallel tasks
export function* loadPeople() {
  // @ts-ignore
  const people = yield call(getData, '/people');

  yield put({ type: 'SET_PEOPLE', payload: people.results });
}

export function* loadPlanets() {
  // @ts-ignore
  const planets = yield call(getData, '/planets');

  yield put({ type: 'SET_PLANETS', payload: planets.results });
}
