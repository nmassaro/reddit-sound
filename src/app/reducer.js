const initialState = {
  posts: [],
  playing: [],
  subreddit: 'music'
}

const redditSoundApp = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SUBREDDIT':
      {
        return {
          ...state,
          subreddit: action.data
        };
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

export default redditSoundApp;

/*

  togglePlaying(index) {
    const currentPost = this.props.posts[index];

    if (currentPost) {
      this.setState({ ...this.state,
        playing: {
          [currentPost.data.id]: (this.state.playing[currentPost.data.id]
          ? false
          : !this.state.playing[currentPost.data.id])
        }
      });
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  start() {
    if (this.posts) {
      this.togglePlaying(0);
    }
  }
  */