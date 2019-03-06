import { connect } from "react-redux";
import PlayerComponent from "./PlayerComponent";

const mapStateToProps = (state, ownProps) => ({
  url: state.playing
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setPlaying: post => dispatch({ type: "SET_PLAYING", post })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerComponent);
