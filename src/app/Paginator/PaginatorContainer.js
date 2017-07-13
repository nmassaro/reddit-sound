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

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    nextPage: () => dispatch({
        type: 'FETCH_POSTS'
    })
});

export default connect(mapStateToProps, 
    mapDispatchToProps)(PaginatorContainer);