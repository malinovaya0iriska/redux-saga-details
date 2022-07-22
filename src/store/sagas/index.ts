import { take } from 'redux-saga/effects';

// business logic
export function* workerSaga() {
  console.log('click from saga');
}

// actions
export function* watchClickSaga() {
  while (true) {
    yield take('CLICK');
    yield workerSaga();
  }
}

export default function* rootSaga() {
  yield watchClickSaga();
}
