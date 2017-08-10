import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaginatorComponent from './PaginatorComponent';

class PaginatorContainer extends Component {
    render() {
        return (
        <PaginatorComponent 
        {...this.props}
         />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    before: state.before,
    pageNumber: state.page
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    nextPage: () => dispatch({
        type: 'FETCH_POSTS'
    }),
    previousPage: () => dispatch({
        type: 'FETCH_PREVIOUS_POSTS'
    })
});

export default connect(mapStateToProps, 
    mapDispatchToProps)(PaginatorContainer);