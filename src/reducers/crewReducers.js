import _ from 'lodash';
import { GET_CREW } from '../actions/crewActions';

const initialState = {
  members: [],
  memberStatus: [],
  successful: false,
};

const crew = (state = initialState, action) => {
  switch (action.type) {
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
        tableSuccessful: false,
      });
    }
    default:
      return state;
  }
};

export default crew;
