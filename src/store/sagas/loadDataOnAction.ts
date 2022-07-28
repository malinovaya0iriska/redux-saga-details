/* eslint-disable @typescript-eslint/ban-ts-comment */
import { apply, call, put, take } from 'redux-saga/effects';
import { BASE_URL } from '../../api';

// pattern take + call
// call will block the saga, so it cannot catch next take till it will be finished

export default function* loadDataOnAction() {
  while (true) {
    // @ts-ignore
    yield take('LOAD_DATA');
    // @ts-ignore
    const response = yield call(fetch, `${BASE_URL}/planets`);
    // @ts-ignore
    const data = yield apply(response, response.json);
    console.log('PLANETS', data);

    yield put({ type: 'PLANETS_LOADED', payload: data });
  }
}
