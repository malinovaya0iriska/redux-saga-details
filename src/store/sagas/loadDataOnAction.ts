/* eslint-disable @typescript-eslint/ban-ts-comment */
import { SagaIterator } from 'redux-saga';
import { actionChannel, call, put, take } from 'redux-saga/effects';
import { BASE_URL } from '../../api';

// pattern take + call + actionChannel
// collect all actions and execute them one by one on turn

export default function* loadDataOnAction(): SagaIterator<void> {
  const channel = yield actionChannel('LOAD_DATA');
  while (true) {
    yield take(channel);

    yield call(fetchDataOnAction);
  }
}

export function* fetchDataOnAction(): SagaIterator<void> {
  console.log('Fetching started .... ');

  const response = yield call(fetch, `${BASE_URL}/planets`);

  const data = yield call([response, response.json]);
  console.log('PLANETS', data);

  yield put({ type: 'PLANETS_LOADED', payload: data });
}
