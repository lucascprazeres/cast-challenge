import { all } from 'redux-saga/effects';

import course from './course/sagas';

export default function* rootSaga() {
  return yield all([course]);
}
