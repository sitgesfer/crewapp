import connect from 'react-redux/es/connect/connect';
import { getCrew } from '../actions/crewActions';
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
