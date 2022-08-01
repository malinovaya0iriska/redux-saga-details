import { LOCATION_CHANGE } from 'redux-first-history';
import { SagaIterator } from 'redux-saga';
import {
  apply,
  call,
  fork,
  put,
  select,
  take,
  takeEvery,
} from 'redux-saga/effects';
import { BASE_URL } from '../../api';
import { AppRoute } from '../../constants';
import { IPeopleData } from '../../types';
import * as actionCreators from '../actionCreators';
import * as actionTypes from '../actionTypes';
import { getPeople } from '../selectors';

export function* loadPeopleDetails({
  payload,
}: {
  payload: { id: string };
}): SagaIterator<void> {
  const { id } = payload;

  try {
    const request = yield call(fetch, `${BASE_URL}/people/${id}`);
    const data = yield apply(request, request.json, []);

    // throw new Error('500');

    yield put(actionCreators.getCharacterInfoSuccess(data));
  } catch (error) {
    yield put(actionCreators.getCharacterInfoFailure({ error: String(error) }));
  }
}

function* loadPeopleList({ payload }: any): SagaIterator<void> {
  const { page, search } = payload;
  try {
    const request = yield call(
      fetch,
      `${BASE_URL}/people?page=${page}&search=${search}`,
    );
    // throw new Error('500');

    const data: IPeopleData = yield call([request, request.json]);

    yield put(actionCreators.getPeopleSuccess(data));
  } catch (error) {
    yield put(actionCreators.getPeopleFailure(String(error)));
  }
}

function* loadPeopleListOnRouteChange(): SagaIterator<void> {
  while (true) {
    const action = yield take(LOCATION_CHANGE);

    if (action.payload.location.pathname.endsWith(AppRoute.HOME)) {
      const people = yield select(getPeople);
      const { page, search } = people;

      yield put(actionCreators.getPeople({ page, search }));
    }

    const characterInfoPage = action.payload.location.pathname.includes(
      AppRoute.PEOPLE,
    );

    if (characterInfoPage) {
      const id = action.payload.location.pathname.split('/').pop();
      yield put(actionCreators.getCharacterInfo({ id }));
    }
  }
}
export default function* loadPeopleSaga() {
  yield fork(loadPeopleListOnRouteChange);
  yield takeEvery(actionTypes.GET_PEOPLE, loadPeopleList);
  yield takeEvery(actionTypes.GET_CHARACTER_INFO, loadPeopleDetails);
}
