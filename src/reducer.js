const initialState = {
  posts: [],
  playing: null,
  subreddit: 'music',
  timeframe: 'week',
  after: null,
  before: null,
  page: 0,
};

const redditSoundApp = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SUBREDDIT': {
      return {
        ...state,
        subreddit: action.data,
        after: initialState.after,
        before: initialState.before,
      };
    }
    case 'SET_PLAYING': {
      return {
        ...state,
        playing: action.post,
      };
    }
    case 'SET_TIMEFRAME': {
      return {
        ...state,
        timeframe: action.timeframe,
        after: initialState.after,
        before: initialState.before,
        page: initialState.page,
      };
    }
    case 'FETCH_PREVIOUS_POSTS_SUCCEEDED': {
      return {
        ...state,
        posts: action.posts,
        after: action.posts.data.data.after,
        before: action.posts.data.data.before,
        page: state.page - 1,
      };
    }
    case 'FETCH_POSTS_SUCCEEDED': {
      return {
        ...state,
        posts: action.posts,
        after: action.posts.data.data.after,
        before: action.posts.data.data.before,
        page: state.page + 1,
      };
    }
    case 'FETCH_POSTS_FAILED':
    case 'FETCH_PREVIOUS_POSTS_FAILED': {
      return {
        ...state,
        error: true,
      };
    }
    default:
      return state;
  }
};

export const getSubreddit = state => state.subreddit;
export const getPage = state => state.page;
export const getAfter = state => state.after;
export const getBefore = state => state.before;
export const getTimeframe = state => state.timeframe;

export default redditSoundApp;
