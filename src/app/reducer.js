const initialState = {
  posts: [],
  playing: null,
  subreddit: 'music',
  timeframe: 'weekly',
  after: null,
  before: null
}

const redditSoundApp = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SUBREDDIT':
      {
        return {
          ...state,
          subreddit: action.data,
          after: null,
          before: null
        };
      }
    case 'TOGGLE_PLAYING':
      {
        return {
          ...state,
          playing: action.index
        };
      }
    case 'FETCH_PREVIOUS_POSTS_SUCCEEDED':
      {
        return {
          ...state,
          posts: action.posts,
          after: action.posts.data.data.after,
          before: action.posts.data.data.before
        };
      }
    case 'FETCH_POSTS_SUCCEEDED':
      {
        return {
          ...state,
          posts: action.posts,
          after: action.posts.data.data.after,
          before: action.posts.data.data.before
        };
      }
    case 'FETCH_POSTS_FAILED':
    case 'FETCH_PREVIOUS_POSTS_FAILED':
    {
      return {
        ...state,
        error: true
      };
    }
    default:
      return state;
  }
}

export const getSubreddit = state => state.subreddit;
export const getAfter = state => state.after;
export const getBefore = state => state.before;

export default redditSoundApp;