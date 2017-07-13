const initialState = {
  posts: [],
  playing: null,
  subreddit: 'music',
  timeframe: 'weekly',
  after: null
}

const redditSoundApp = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SUBREDDIT':
      {
        return {
          ...state,
          subreddit: action.data,
          after: null
        };
      }
    case 'TOGGLE_PLAYING':
      {
        return {
          ...state,
          playing: action.index
        };
      }
    case 'FETCH_POSTS_SUCCEEDED':
      {
        return {
          ...state,
          posts: action.posts,
          after: action.posts.data.data.after
        };
      }
    default:
      return state;
  }
}

export const getSubreddit = state => state.subreddit;
export const getAfter = state => state.after;

export default redditSoundApp;