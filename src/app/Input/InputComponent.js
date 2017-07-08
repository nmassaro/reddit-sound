import React from 'react';

const InputComponent = (props) => (
    <div className='subreddit-name'>
          { '/r/' }
          <input type='text' onKeyUp={props.updateSubreddit} />
    </div>   
);

export default InputComponent;