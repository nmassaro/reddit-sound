import React from 'react';
import ReactPlayer from 'react-player';
import * as style from './style';

const PostListComponent = ({ posts, playing, togglePlaying }) => (
    <div>
    {posts && posts.data && posts.data.data ?
      posts.data.data.children
      .filter(post => Boolean(post.data.secure_media))
      .map((post, index) => (
        <div key={index}>
            <style.TrackTitle>
                {post.data.title}
            </style.TrackTitle>
            <div className='center'>
                <ReactPlayer
                    style={style.ReactPlayer}
                    controls 
                    playing={playing === index}
                    url={post.data.url} 
                    onEnded={() => togglePlaying(index + 1)}
                />
            </div>
        </div>
      ))
      : null}
    </div>
);

export default PostListComponent;