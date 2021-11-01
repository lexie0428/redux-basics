import { all } from 'redux-saga/effects';
import { cashWatcher } from './cashSaga';
import { customerWatcher } from './customerSaga';

export function* rootWatcher() {
  yield all([cashWatcher(), customerWatcher()]);
}
