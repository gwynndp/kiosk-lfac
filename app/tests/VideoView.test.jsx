import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import VideoView from "../VideoView";

test("should render a VideoView", () => {
  const props = {
    currentVideo: {
      id: 4,
      category: "people",
      name: "Ashley Sanchez",
      src: "videos/Ashley-Sanchez.mp4",
      img: "images/videos/Ashley-Sanchez.jpg"
    },
    listLength: 5,
    updateCurrentVideo: () => {}
  };

  const component = renderer.create(
    <Router>
      <VideoView
        video={props.currentVideo}
        listLength={props.listLength}
        updateCurrentVideo={props.updateCurrentVideo}
      />
    </Router>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// should render a MainNav
// should render a Video
// should render buttons for Prev and Next

// should render prev video when prev button clicked
// should render next vidwo when next button clicked
