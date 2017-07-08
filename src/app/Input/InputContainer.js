import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputComponent from './InputComponent';

class InputContainer extends Component {
    constructor(props) {
        super(props);
        this.updateSubreddit = this.updateSubreddit.bind(this);
    }

    updateSubreddit(event) {
        if (event.key === 'Enter') {
            this.props.setSubreddit(event.target.value);
            this.props.getPosts();
        }
    }

    render = () => (
        <InputComponent 
        {...this.props}
        updateSubreddit={this.updateSubreddit}
         />
    )
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setSubreddit: (subreddit) => dispatch({
        type: 'SET_SUBREDDIT',
        data: subreddit
    })
});

export default connect(mapStateToProps, 
    mapDispatchToProps)(InputContainer);