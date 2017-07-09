import React from 'react';
import ReactPlayer from 'react-player';

const PostListComponent = ({ posts, playing, togglePlaying }) => (
    <div>
    {posts && posts.data && posts.data.data ?
      posts.data.data.children
      .filter(post => Boolean(post.data.secure_media))
      .map((post, index) => (
        <div key={index}>
        <h1 onClick={() => togglePlaying(post.data.id, index)}>{post.data.secure_media.oembed.title}</h1>
          <div className='center'>
          <ReactPlayer controls playing={playing[post.data.id]} url={post.data.url} onEnded={() => this.togglePlaying(index + 1)} />
          </div>
        </div>
      ))
      : null}
    </div>
);

export default PostListComponent;