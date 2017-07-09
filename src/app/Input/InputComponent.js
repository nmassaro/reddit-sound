import React from 'react';
import * as style from './style';

const InputComponent = (props) => (
    <style.SubredditName>
          { '/r/' }
          <style.Input type='text' placeholder='music' onKeyUp={props.updateSubreddit} />
    </style.SubredditName>   
);

export default InputComponent;