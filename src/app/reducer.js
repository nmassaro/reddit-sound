const initialState = {
  posts: [],
  playing: null,
  subreddit: 'music',
  timeframe: 'weekly',
  page: 1,
  totalPages: 1
}

const redditSoundApp = (state = initialState, action) => {
  console.log("Dispatched: ", action);
  switch (action.type) {
    case 'SET_SUBREDDIT':
      {
        return {
          ...state,
          subreddit: action.data
        };
      }
    case 'TOGGLE_PLAYING':
      {
        return {
          ...state,
          playing: action.index
        };
      }
    case 'SET_PAGE':
    {
      return {
        ...state,
        page: action.page
      }
    }
    case 'FETCH_POSTS_SUCCEEDED':
      {
        return {
          ...state,
          posts: action.posts
        };
      }
    default:
      return state;
  }
}

export const getSubreddit = state => state.subreddit;

export default redditSoundApp;