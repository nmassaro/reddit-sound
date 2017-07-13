import React, { Component } from 'react';
import Input from './Input';
import PostList from './PostList';
import Paginator from './Paginator';
import * as style from './style';

class App extends Component {
  render() {
    const { posts, playing } = this.props;

    return (
      <style.App>
        <style.Banner>
          <Input />
          <Paginator />
        </style.Banner>
      <div className='container'>
        <style.SiteTitle>Reddit Sound</style.SiteTitle>
        <PostList />
      </div>
      </style.App>
    );
  }
}

export default App;
