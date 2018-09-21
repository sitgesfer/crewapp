import _ from 'lodash';
import { GET_CREW, MOVE_CREW } from '../actions/crewActions';

const initialState = {
  members: [],
  memberStatus: [],
  successful: false,
};

const crew = (state = initialState, action) => {
  switch (action.type) {
    // Get crew member reducer promise based actions.
    case `${GET_CREW}_PENDING`: {
      return state;
    }
    case `${GET_CREW}_FULFILLED`: {
      const memberStatus = new Array(action.payload.data.results.length);
      _.fill(memberStatus, { status: 'applied' });
      return Object.assign({}, state, {
        members: action.payload.data.results,
        memberStatus,
      });
    }
    case `${GET_CREW}_REJECTED`: {
      return Object.assign({}, state, {
        successful: false,
      });
    }
    // Change crew member status simple action.
    case MOVE_CREW: {
      const newMemberStatus = state.memberStatus.slice();
      newMemberStatus[action.payload.member] = { status: action.payload.status };
      return Object.assign({}, state, {
        memberStatus: newMemberStatus,
      });
    }
    default:
      return state;
  }
};

export default crew;
