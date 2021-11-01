import { put, takeEvery, call } from 'redux-saga/effects';
import {
  addManyCustomersAction,
  FETCH_CUSTOMERS,
} from '../store/customerReducer';

const fetchCustomersFromApi = () =>
  fetch('https://jsonplaceholder.typicode.com/users?_limit=10');

function* fetchCustomersWorker() {
  const data = yield call(fetchCustomersFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(addManyCustomersAction(json));
}

export function* customerWatcher() {
  yield takeEvery(FETCH_CUSTOMERS, fetchCustomersWorker);
}
