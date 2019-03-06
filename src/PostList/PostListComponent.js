import React from "react";
import ReactPlayer from "react-player";
import * as style from "./style";

const PostListComponent = ({ posts, playing, setPlaying }) => (
  <style.PostList>
    {posts && posts.data && posts.data.data
      ? posts.data.data.children
          .filter(post => Boolean(post.data.secure_media))
          .map((post, index) => (
            <div key={index}>
              <style.TrackTitle active={playing === post.data.url } onClick={() => setPlaying(post.data.url)}>
                <style.Upvotes>{post.data.ups}</style.Upvotes>
                {post.data.title}
              </style.TrackTitle>
            </div>
          ))
      : null}
  </style.PostList>
);

export default PostListComponent;
