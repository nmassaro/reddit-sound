import React from 'react';

const InputComponent = (props) => (
    <div className='subreddit-name'>
          { '/r/' }
          <input type='text' placeholder='music' onKeyUp={props.updateSubreddit} />
    </div>   
);

export default InputComponent;