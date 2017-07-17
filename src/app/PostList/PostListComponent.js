import React from 'react';
import ReactPlayer from 'react-player';
import Panel from '../Transitions/Panel';
import * as style from './style';

const PostListComponent = ({ posts, playing, togglePlaying }) => (
    <style.PostList>
    {posts && posts.data && posts.data.data ?
      posts.data.data.children
      .filter(post => Boolean(post.data.secure_media))
      .map((post, index) => (
        <div key={index}>
            <Panel
            header={
            <style.TrackTitle onClick={() => togglePlaying(index)}>
                {post.data.title}
            </style.TrackTitle>
            }>
            <div className='center'>
                <ReactPlayer
                    style={style.ReactPlayer}
                    controls 
                    playing={playing === index}
                    url={post.data.url} 
                    onEnded={() => togglePlaying(index + 1)}
                />
            </div>
            </Panel>
        </div>
      ))
      : null}
    </style.PostList>
);

export default PostListComponent;