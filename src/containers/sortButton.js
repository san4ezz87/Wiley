import { connect } from 'react-redux';
import { sortTodo } from '../actions';
import LinkSort from '../components/LinkSort';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(sortTodo())
    }
  }
};

const SortButton = connect(
  null,
  mapDispatchToProps
)(LinkSort);

export default SortButton;