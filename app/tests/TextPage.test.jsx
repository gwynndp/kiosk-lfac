import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TextPage from '../TextPage';

test('should render a TextPage', () => {
  const props = {
    page: {
      title: "Valley of the Moon Children's Foundation",
      content:
        '<img src="images/vom-logo.png" alt="" width="200" height="164" />\\n<p>Judge Arnold Rosenfeld formed the Valley of the Moon Foundation in 1994.  It’s mission is “in partnership with the Valley of the Moon Children’s Home and the Redwood Children’s Center to positively impact the present and future lives of the abused, abandoned, and neglected children in Sonoma County and to assure the children we serve positive opportunities to aid them to become productive, equal members of the community”.</p>\\n',
    },
  };

  const tree = renderer
    .create(
      <Router>
        <TextPage page={props.page} />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// should render a MainNav
// should render a PageHeader & Content
// should render a Sidebar
