/* eslint-disable @typescript-eslint/ban-ts-comment */
import { LOCATION_CHANGE } from 'redux-first-history';
import { apply, call, fork, put, take } from 'redux-saga/effects';
import { BASE_URL } from '../../api';
import { Endpoint } from '../../constants';

function* loadBlogData() {
  // @ts-ignore
  const request = yield call(fetch, `${BASE_URL}/vehicles`);
  // @ts-ignore
  const data = yield apply(request, request.json);

  console.log('blog data', data);

  yield put({ type: 'BLOG_LOADED', payload: data });
}

export default function* pageLoaderSaga() {
  while (true) {
    // @ts-ignore
    const action = yield take(LOCATION_CHANGE);
    if (action.payload.location.pathname.endsWith(Endpoint.BLOG)) {
      yield fork(loadBlogData);
    }
    console.log(action);
  }

  // yield takeEvery('LOAD_BLOG_DATA', loadBlogData);
}
