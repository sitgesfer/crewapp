import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';

test('Renders members correctly', () => {
  const mockMembers = [
    {
      name: {
        title: 'mr',
        first: 'Fernando',
        last: 'Rivas',
      },
      location: {
        city: 'Barcelona',
      },
      picture: {
        medium: 'https://randomuser.me/api/portraits/med/men/63.jpg',
      },
    },
    {
      name: {
        title: 'ms',
        first: 'Maria',
        last: 'Gonzalez',
      },
      location: {
        city: 'Barcelona',
      },
      picture: {
        medium: 'https://randomuser.me/api/portraits/med/men/63.jpg',
      },
    },
  ];
  const mockMemberStatus = [
    { status: 'applied' },
    { status: 'applied' },
  ];
  const dashboard = renderer.create(
    <Dashboard
      onGetCrew={() => {}}
      members={mockMembers}
      memberStatus={mockMemberStatus}
      onMoveCrew={() => {}}
    />,
  );
  let dashboardTree = dashboard.toJSON();
  expect(dashboardTree).toMatchSnapshot();
});
