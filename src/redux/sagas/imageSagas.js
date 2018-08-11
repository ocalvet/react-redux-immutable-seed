import { all, takeLatest, put } from 'redux-saga/effects';
import { FETCH_IMAGE, fetchImageSuccess, fetchImageError } from '../actions/index';

function* fetchImageSaga() {
  try {
    console.log('Start getting image');
    const imageResponse = yield fetch('https://dog.ceo/api/breeds/image/random');
    const resp = yield imageResponse.json();
    console.log('Success getting image', resp);
    yield put(fetchImageSuccess(resp.message));
  } catch (e) {
    console.log('Error getting image', e);
    yield put(fetchImageError(e));
  }
}

export default function* imageSagas() {
  yield all([
    takeLatest(FETCH_IMAGE, fetchImageSaga)
  ]);
}