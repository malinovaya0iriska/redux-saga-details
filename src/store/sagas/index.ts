import { all, call, spawn } from 'redux-saga/effects';
import loadStartData from './initialSagas';
import loadDataOnAction from './loadDataOnAction';
import pageLoaderSaga from './pageLoadData';

export default function* rootSaga() {
  const sagas = [loadStartData, pageLoaderSaga, loadDataOnAction];

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
