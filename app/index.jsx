import React from "react";
import { render } from "react-dom";
import axios from "axios";
import styled from "styled-components";
// import SVG from 'react-inlinesvg';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import TextPage from "./TextPage";
import GalleryPage from "./GalleryPage";
import VideoView from "./VideoView";

const Footer = styled.footer`
  background-color: red;
  color: white;
  position: fixed;
  bottom: 0px;
  display: block;
  width: 100%;
  text-align: center;
  fontsize: medium;
  font-weight: bold;
  padding: 5px;
`;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: {},
      videos: [],
      currentVideo: null,
      showVideoView: false,
      updateCurrentVideo: this.updateCurrentVideo.bind(this),
      handleVideoCardClick: this.handleVideoCardClick.bind(this)
    };
  }

  componentDidMount() {
    const context = this;
    axios
      .get("/jsontest")
      .then(res => {
        context.setState(
          {
            pages: res.data.pages,
            videos: res.data.videos
          },
          () => {
            console.log("ON LOAD", this.state);
          }
        );
      })
      .catch(err => {
        throw err;
      });
  }

  updateCurrentVideo(vidIndex) {
    this.setState(state => ({ currentVideo: state.videos[vidIndex] }));
  }

  handleVideoCardClick(vid) {
    this.setState({
      currentVideo: vid
    });
  }

  render() {
    const {
      videos,
      pages,
      currentVideo,
      showVideoView,
      handleVideoCardClick,
      updateCurrentVideo
    } = this.state;
    const { lfac, jackdemayo, schools, vom } = pages;

    if (!videos[0]) {
      return <div>Hold tight while videos are being fetched...</div>;
    }

    return (
      <div
        id="content-wrapper"
        style={{ display: "flex", width: `100%`, height: `100%` }}
      >
        {/* <MainNav /> */}
        <Switch>
          <Route path="/lfac">
            <TextPage page={lfac} />
          </Route>
          <Route path="/jackdemayo">
            <TextPage page={jackdemayo} />
          </Route>
          <Route path="/schools">
            <TextPage page={schools} />
          </Route>
          <Route path="/vom">
            <TextPage page={vom} />
          </Route>
          <Route path="/fires">
            <GalleryPage
              videos={videos.filter(vid => vid.category === "fires")}
              showVideoView={showVideoView}
              handleVideoCardClick={handleVideoCardClick}
            />
          </Route>
          <Route path="/schools/:school">
            <GalleryPage
              videos={videos}
              showVideoView={showVideoView}
              handleVideoCardClick={handleVideoCardClick}
            />
          </Route>
          <Route path="/video">
            <VideoView
              video={currentVideo}
              listLength={videos.length}
              updateCurrentVideo={updateCurrentVideo}
            />
          </Route>
          <Route exact path="/">
            <Home
              videos={videos}
              showVideoView={showVideoView}
              handleVideoCardClick={handleVideoCardClick}
            />
          </Route>
        </Switch>

        <Footer>Connect with your Community!</Footer>
      </div>
    );
  }
}

render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("app")
);
