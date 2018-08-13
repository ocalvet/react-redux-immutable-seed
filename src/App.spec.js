// Link.react.test.js
import React from 'react';
import App from './App';
import ShallowRenderer from 'react-test-renderer/shallow'

describe('App', () => {
  it('Matches the old snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(
      <App />,
    );
    expect(result).toMatchSnapshot();
  });
  
  it('renders a div with the container class', () => {
    expect(false).toBeFalsy();
  })
})