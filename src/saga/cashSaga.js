import { put, takeEvery } from 'redux-saga/effects';
import {
  addCashAction,
  ASYNC_ADD_CASH,
  getCashAction,
  ASYNC_GET_CASH,
} from '../store/cashReducer';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* addCashWorker() {
  yield delay(1000);
  yield put(addCashAction());
}

function* getCashWorker() {
  yield delay(1000);
  yield put(getCashAction());
}

export function* cashWatcher() {
  yield takeEvery(ASYNC_ADD_CASH, addCashWorker);
  yield takeEvery(ASYNC_GET_CASH, getCashWorker);
}
