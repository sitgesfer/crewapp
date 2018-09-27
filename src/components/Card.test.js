import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

test('Renders single card correctly', () => {
  const dashboard = renderer.create(
    <Card
      status="interviewing"
      onSendLeft={() => {}}
      onSendRight={() => {}}
      member={1}
      name="Fernando Rivas"
      city="Barcelona"
      picture="https://image.url"
    />,
  );
  let cardTree = dashboard.toJSON();
  expect(cardTree).toMatchSnapshot();
});
