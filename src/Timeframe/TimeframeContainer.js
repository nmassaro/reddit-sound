import { connect } from 'react-redux';
import TimeframeComponent from './TimeframeComponent';

const mapStateToProps = (state, ownProps) => ({
  timeframe: state.timeframe,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateTimeframe: timeframe =>
    dispatch({
      type: 'SET_TIMEFRAME',
      timeframe,
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeframeComponent);
