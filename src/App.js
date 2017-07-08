import React, { Component } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
    this.togglePlaying = this.togglePlaying.bind(this);
    this.updateSubreddit = this.updateSubreddit.bind(this);
    this.start = this.start.bind(this);

    this.state = { posts: [], playing: [], subreddit: 'music' };
  }

  componentDidMount() {
    this.getPosts();
  }

  start() {
    if (this.posts) {
      this.togglePlaying(0);
    }
  }

  updateSubreddit(event) {
    this.setState({ ...this.state, subreddit: event.target.value });
    this.getPosts();
  }

  getPosts() {
    axios.get(`https://www.reddit.com/r/${this.state.subreddit}/new.json`, 
    { params: { sort: 'activity', limit: 5 } })
    .then(response => {
      this.setState({ ...this.state, posts: response.data.data.children });
      this.start();
    });
  }

  togglePlaying(index) {
    const currentPost = this.state.posts[index];
    
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

  render() {
    return (
      <div>
        <div className='subreddit-name'>
          { '/r/' }
          <input type='text' placeholder={this.state.subreddit} onBlur={this.updateSubreddit} />
        </div>
      <div className='container'>
        <h1>Reddit Sound</h1>
        { this.state && this.state.posts ?
          this.state.posts
          .filter(post => Boolean(post.data.secure_media))
          .map((post, index) => (
            <div key={index}>
            <h1 onClick={() => this.togglePlaying(post.data.id, index)}>{post.data.secure_media.oembed.title}</h1>
              <div className='center'>
              <ReactPlayer controls playing={this.state.playing[post.data.id]} url={post.data.url} onEnded={() => this.togglePlaying(index + 1)} />
              </div>
            </div>
          ))
        : null
        }
      </div>
      </div>
    );
  }
}

export default App;
