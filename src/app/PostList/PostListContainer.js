import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostListComponent from './PostListComponent';

class PostListContainer extends Component {
  render() {
    return (
      <PostListComponent 
      {...this.props}
      />
    );
  } 
}

const mapStateToProps = state => ({
  posts: state.posts,
  playing: state.playing
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  togglePlaying: index => dispatch({ type: 'TOGGLE_PLAYING', index })
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PostListContainer);