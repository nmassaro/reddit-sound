import "regenerator-runtime/runtime";
import { fork, select, call, put, takeLatest } from "redux-saga/effects";
import {
  getSubreddit,
  getAfter,
  getBefore,
  getPage,
  getTimeframe
} from "./reducer";
import { fetchPostsAPI, fetchPreviousPostsAPI } from "./api";

function* fetchPosts() {
  try {
    const subreddit = yield select(getSubreddit);
    const timeframe = yield select(getTimeframe);
    const after = yield select(getAfter);
    const posts = yield call(fetchPostsAPI, subreddit, timeframe, after);

    yield put({ type: "FETCH_POSTS_SUCCEEDED", posts });
  } catch (error) {
    yield put({ type: "FETCH_POSTS_FAILED", message: error.message });
  }
}

function* watchFetchPosts() {
  yield takeLatest("FETCH_POSTS", fetchPosts);
}

function* fetchPreviousPosts() {
  try {
    const page = yield select(getPage);
    if (page < 1) throw error("Already at first page.");
    const subreddit = yield select(getSubreddit);
    const timeframe = yield select(getTimeframe);
    const before = yield select(getBefore);
    const posts = yield call(fetchPreviousPostsAPI, subreddit, timeframe, before);
    yield put({ type: "FETCH_PREVIOUS_POSTS_SUCCEEDED", posts });
  } catch (error) {
    yield put({ type: "FETCH_PREVIOUS_POSTS_FAILED", message: error.message });
  }
}

function* watchFetchPreviousPosts() {
  yield takeLatest("FETCH_PREVIOUS_POSTS", fetchPreviousPosts);
}

export default function* saga() {
  yield [fork(watchFetchPosts), fork(watchFetchPreviousPosts)];
}
