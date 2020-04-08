import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Sidebar from '../Sidebar';

test('should render a Sidebar', () => {
  const tree = renderer
    .create(
      <Router>
        <Sidebar />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// should render the correct # of links
// should display on every page?
