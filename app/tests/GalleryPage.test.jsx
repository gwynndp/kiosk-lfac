import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import GalleryPage from "../GalleryPage";

test("should render a GalleryPage", () => {
  const props = {
    videos: [
      {
        id: 4,
        category: "people",
        name: "Ashley Sanchez",
        src: "videos/Ashley-Sanchez.mp4",
        img: "images/videos/Ashley-Sanchez.jpg"
      },
      {
        id: 5,
        category: "people",
        name: "Jackie Rose Wilson",
        src: "videos/Jackie-Rose-Wilson.mp4",
        img: "images/videos/Jackie-Rose-Wilson.jpg"
      },
      {
        id: 6,
        category: "people",
        name: "Jude Gibson Byers",
        src: "videos/Jude-Gibson-Byers.mp4",
        img: "images/videos/Jude-Gibson-Byers.jpg"
      },
      {
        id: 7,
        category: "fires",
        name: "Kathryn Hecht",
        src: "videos/Kathryn-Hecht.mp4",
        img: "images/videos/Kathryn-Hecht.jpg"
      },
      {
        id: 8,
        category: "fires",
        name: "Leanne Fogg",
        src: "videos/Leanne-Fogg.mp4",
        img: "images/videos/Leanne-Fogg.jpg"
      }
    ],
    handleVideoCardClick: () => {}
  };

  const tree = renderer
    .create(
      <Router>
        <GalleryPage
          videos={props.videos}
          handleVideoCardClick={props.handleVideoCardClick}
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// should render a MainNav
// should render a Gallery
// should render a Sidebar
// should render the correct title

// should direct to a VideoPage when clicked  //DOES THIS TEST GO HERE?
