/* eslint-disable @typescript-eslint/ban-ts-comment */
import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { fetchDataOnAction } from './loadDataOnAction';
import loadPeopleSaga from './loadPeopleSaga';

export default function* loadStartData(): SagaIterator<void> {
  yield all([fork(loadPeopleSaga), fork(fetchDataOnAction)]);
}
