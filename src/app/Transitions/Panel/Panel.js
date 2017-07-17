import React, { Component } from 'react';
import * as style from './style';
import CSSTransition from 'react-transition-group/CSSTransition';

const Slide = ({ children, ...props }) => (
  <style.Slide>
    <CSSTransition
      {...props}
      timeout={300}
      classNames="slide"
      mountOnEnter
      unmountOnExit
    >
      {children}
    </CSSTransition>
 </style.Slide>
);

class Panel extends Component {
  constructor(...args) {
    super(...args);
    this.state = { show: false }
  }
  render() {
    return (
      <style.Panel className='panel'>
      <style.Header
        className='panel-header'
        onClick={
        () => {this.setState({ show: !this.state.show });
        }}
      >
        { this.props.header }
      </style.Header>
      <Slide in={ this.state.show }>
        <div className='panel-body'>
          { this.props.children }
        </div>
      </Slide>
      </style.Panel>
    )
  }
}

export default Panel;