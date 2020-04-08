import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import MainNav from "../MainNav";

test("should render a MainNav", () => {
  const tree = renderer
    .create(
      <Router>
        <MainNav gallery="true" />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// should show home button on every page
// should show the prev and next buttons on the gallery pages

// should display on every page?
