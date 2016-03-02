import { connect } from 'react-redux';
import Threads from '../components/thread';
import { createMessageInThread, messageInputChange } from '../actions';
import { find } from 'lodash';

const mapStateToProps = (state, ownProps) => {
  const selectedThread = find(state.threads, { 'id': ownProps.params.threadId });
  return {
    thread: selectedThread,
    messageValue: state.messageInput
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddMessageClick: (message, threadId) => {
      dispatch(createMessageInThread(message, threadId));
    },
    onMessageChange: (event) => {
      dispatch(messageInputChange(event.target.value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Threads);
