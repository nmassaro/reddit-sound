import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeframeComponent from './TimeframeComponent';

class TimeframeContainer extends Component {
    render() {
        <TimeframeComponent 
        {...this.props}
         />
    }
}

const mapStateToProps = (state, ownProps) => ({
    timeframe: state.timeframe
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateTimeframe: timeframe => dispatch({
        type: 'SET_TIMEFRAME',
        timeframe
    })
});

export default connect(mapStateToProps, 
    mapDispatchToProps)(TimeframeContainer);