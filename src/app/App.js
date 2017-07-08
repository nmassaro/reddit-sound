import React, { Component } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Input from './Input';
import * as style from './style';

class App extends Component {
  constructor(props) {
    super(props);
    // this.getPosts = this.getPosts.bind(this);
    // this.togglePlaying = this.togglePlaying.bind(this);
    // this.start = this.start.bind(this);
  }

  render() {
    const { posts, playing } = this.props;

    return (
      <style.App>
        <Input />
      <div className='container'>
        <h1>Reddit Sound</h1>
        {
          posts ?
          posts
          .filter(post => Boolean(post.data.secure_media))
          .map((post, index) => (
            <div key={index}>
            <h1 onClick={() => this.togglePlaying(post.data.id, index)}>{post.data.secure_media.oembed.title}</h1>
              <div className='center'>
              <ReactPlayer controls playing={playing[post.data.id]} url={post.data.url} onEnded={() => this.togglePlaying(index + 1)} />
              </div>
            </div>
          ))
          : null
        }
      </div>
      </style.App>
    );
  }
}

export default App;
