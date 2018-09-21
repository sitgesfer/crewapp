import connect from 'react-redux/es/connect/connect';
import { getCrew, moveCrew } from '../actions/crewActions';
import Dashboard from '../components/Dashboard';

const mapStateToProps = state => ({
  members: state.crew.members,
  memberStatus: state.crew.memberStatus,
  successful: false,
});

const mapDispatchToProps = dispatch => ({
  onGetCrew: () => {
    dispatch(getCrew());
  },
  onMoveCrew: (member, status) => {
    dispatch(moveCrew(member, status));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
