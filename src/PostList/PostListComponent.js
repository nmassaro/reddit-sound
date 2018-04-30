import React from 'react';
import ReactPlayer from 'react-player';
import * as style from './style';

const PostListComponent = ({ posts, playing, togglePlaying }) => (
    <style.PostList>
    {posts && posts.data && posts.data.data ?
      posts.data.data.children
      .filter(post => Boolean(post.data.secure_media))
      .map((post, index) => (
        <div key={index}>
            <style.TrackTitle onClick={() => togglePlaying(index)}>
                <style.Upvotes>{post.data.ups}</style.Upvotes>
                {post.data.title}
            </style.TrackTitle>
            { playing == index && 
            <style.VideoFrame>
                <ReactPlayer
                    style={style.ReactPlayer}
                    controls 
                    playing={playing === index}
                    url={post.data.url} 
                    onEnded={() => togglePlaying(index + 1)}
                />
            </style.VideoFrame>
            }
        </div>
      ))
      : null}
    </style.PostList>
);

export default PostListComponent;