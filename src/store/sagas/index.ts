import { all, call, spawn } from 'redux-saga/effects';
import loadPeopleSaga from './loadPeopleSaga';

export default function* rootSaga() {
  const sagas = [loadPeopleSaga];

  const retrySagas = sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    });
  });

  // some familiarity ith Promise.all()
  yield all(retrySagas);
}
