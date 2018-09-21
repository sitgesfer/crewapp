// Actions for the redux containers
import { restApi } from '../config';

export const GET_CREW = 'GET_CREW';

export const getCrew = () => ({
  type: GET_CREW,
  payload: restApi.get('', {
    params: {
      nat: 'gb',
      results: 5,
    },
  }),
});
