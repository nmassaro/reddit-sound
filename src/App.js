import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Input from "./Input";
import PostList from "./PostList";
import Paginator from "./Paginator";
import Player from "./Player";
import * as style from "./style";

class App extends Component {
  render() {
    return (
      <style.App>
        <style.Banner>
          <Input />
          <Paginator />
        </style.Banner>
        <style.Container>
          <style.SiteTitle href="/">Reddit Sound</style.SiteTitle>
          <PostList />
          <Player />
        </style.Container>
      </style.App>
    );
  }
}

export default hot(module)(App);
