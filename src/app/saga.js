import 'regenerator-runtime/runtime';
import { select, call, put, takeLatest } from 'redux-saga/effects';
import { getSubreddit, getAfter, getStartPlaying } from './reducer';
import fetchPostsAPI from './api';

function* fetchPosts() {
  try {
    const subreddit = yield select(getSubreddit);
    const after = yield select(getAfter);
    const posts = yield call(fetchPostsAPI, subreddit, after);
    yield put({ type: 'FETCH_POSTS_SUCCEEDED', posts });
  } catch(error) {
    yield put({ type: 'FETCH_POSTS_FAILED', message: error.message });
  }
}

function* watchFetchPosts() {
  yield takeLatest('FETCH_POSTS', fetchPosts);
}

export default watchFetchPosts;