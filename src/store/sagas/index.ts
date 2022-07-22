import { all, call, fork, spawn } from 'redux-saga/effects';

export function* saga1() {
  console.log('SAGA1');
}
export function* saga2() {
  console.log('SAGA2');
}
export function* saga3() {
  console.log('SAGA3');
}

export default function* rootSaga() {
  // 1 parallel execution, if at least one is failed - rootSaga will be interrupted, next workers wont be executed
  // code will be blocked till execution of this saga's array
  yield [(saga1(), saga2(), saga3())];

  // OR

  // 2 parallel execution, if at least one is failed - rootSaga will be interrupted, next workers wont be executed
  // code will be executed immediately, fork isn't blocking effect
  yield [(fork(saga1), fork(saga2), fork(saga3))];

  // OR

  // 3 the same as 2 way, but you can separate different domains
  yield fork(saga1); // auth
  yield fork(saga2); //users
  yield fork(saga3); // payments

  // OR

  // 4 parallel execution, if at one is failed - rootSaga will be executed further
  yield spawn(saga1); // auth
  yield spawn(saga2); //users
  yield spawn(saga3); // payments

  // OR

  const sagas = [saga1, saga2, saga3];

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

  // ... code ...
}
