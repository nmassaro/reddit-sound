import React from 'react';
import PostListContainer from './PostListContainer';

const PostList = props => (
  <div id='postList-wrapper'>
    <PostListContainer {...props} />
  </div>
);

export default PostList;