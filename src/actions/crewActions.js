// Actions for the redux containers
import { restApi } from '../config';

export const GET_CREW = 'GET_CREW';
export const MOVE_CREW = 'MOVE_CREW';

/**
 * Action to get all crew members from the API
 * @returns {{type: string, payload: *}}
 */
export const getCrew = () => ({
  type: GET_CREW,
  payload: restApi.get('', {
    params: {
      nat: 'gb',
      results: 5,
    },
  }),
});

/**
 * Action to move a crew member from one status to another
 * @param member
 * @param status
 * @returns {{type: string, payload: {member: *, status: *}}}
 */
export const moveCrew = (member, status) => ({
  type: MOVE_CREW,
  payload: {
    member,
    status,
  },
});
