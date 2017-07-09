import 'regenerator-runtime/runtime';
import { select, call, put, takeLatest } from 'redux-saga/effects';
import { getSubreddit } from './reducer';
import fetchPostsAPI from './api';

function* fetchPosts(action) {
  try {
    const subreddit = yield select(getSubreddit);
    const posts = yield call(fetchPostsAPI, subreddit);
    yield put({ type: 'FETCH_POSTS_SUCCEEDED', posts: posts });
  } catch(error) {
    yield put({ type: 'FETCH_POSTS_FAILED', message: error.message });
  }
}

function* watchFetchPosts() {
  yield takeLatest('FETCH_POSTS', fetchPosts);
}

export default watchFetchPosts;