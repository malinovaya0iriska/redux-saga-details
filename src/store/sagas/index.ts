import { takeLatest } from 'redux-saga/effects';

const wait = (delay: number) => new Promise((res) => setTimeout(res, delay));
// business logic
export function* workerSaga() {
  yield wait(1000);
  console.log('click from saga');
}

// actions
export function* watchClickSaga() {
  // yield takeEvery('CLICK', workerSaga);

  yield takeLatest('CLICK', workerSaga);
  // yield takeLeading('CLICK', workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
