import { all } from 'redux-saga/effects';
import listSagas from './list';

export default function* rootSaga() {
  yield all([...listSagas]);
}
