import React, { Component } from 'react';
import Input from './Input';
import PostList from './PostList';
import * as style from './style';

class App extends Component {
  render() {
    const { posts, playing } = this.props;

    return (
      <style.App>
        <Input />
      <div className='container'>
        <style.SiteTitle>Reddit Sound</style.SiteTitle>
        <PostList />
      </div>
      <Paginator />
      </style.App>
    );
  }
}

export default App;
