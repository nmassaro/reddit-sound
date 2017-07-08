import { call, put, takeLatest } from 'redux-saga/effects';
import Api from './api';

function* watchFetchPosts() {
  yield takeLatest('FETCH_POSTS', fetchPosts);
}

function* fetchPosts(action) {
  try {
    const posts = yield call(Api.fetchPosts);
    yield put({ type: 'FETCH_POSTS_SUCCEEDED', posts: posts });
  } catch(error) {
    yield put({ type: 'FETCH_POSTS_FAILED', message: error.message });
  }
}

export default watchFetchPosts;