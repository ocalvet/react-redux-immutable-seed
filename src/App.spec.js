// Link.react.test.js
import React from 'react';
import App from './App';
import ShallowRenderer from 'react-test-renderer/shallow'

test('App renders correctly', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(
    <App />,
  );
  expect(result).toMatchSnapshot();
});