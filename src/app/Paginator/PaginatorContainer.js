import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaginatorComponent from './PaginatorComponent';

class PaginatorContainer extends Component {
    render() {
        <PaginatorComponent 
        {...this.props}
         />
    }
}

const mapStateToProps = (state, ownProps) => ({
    page: state.page,
    totalPages: state.totalPages
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updatePage: page => dispatch({
        type: 'SET_PAGE',
        page
    })
});

export default connect(mapStateToProps, 
    mapDispatchToProps)(PaginatorContainer);