import { connect } from 'react-redux';
import Threads from '../components/threads';
import { createThread } from '../actions';
import { browserHistory } from 'react-router';

const mapStateToProps = (state) => {
  return {
    threads: state.threads
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreateThread: () => {
      dispatch(createThread());
    },
    onThreadSelected: (threadId) => {
      browserHistory.push(`/thread/${threadId}`);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Threads);
