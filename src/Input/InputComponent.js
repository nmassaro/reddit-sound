import React from 'react';
import * as style from './style';

const InputComponent = ({subreddit, updateSubreddit}) => (
    <style.SubredditName>
          { '/r/' }
          <style.Input type='text' placeholder={subreddit} onKeyUp={updateSubreddit} />
    </style.SubredditName>   
);

export default InputComponent;