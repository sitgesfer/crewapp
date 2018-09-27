import { GET_CREW, MOVE_CREW, getCrew, moveCrew } from './crewActions';

describe('Testing actions', () => {
  it('Should generate a member status', () => {
    const expectedAction = {
      type: MOVE_CREW,
      payload: {
        member: 'Fernando',
        status: 'interviewing',
      },
    };
    expect(moveCrew('Fernando', 'interviewing')).toEqual(expectedAction);
  });
});
