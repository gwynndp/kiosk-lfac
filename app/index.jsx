import React from "react";
import { render } from "react-dom";
import axios from "axios";
import styled from "styled-components";
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
      pages: {
        lfac: {
          title: "",
          content: ""
        }
      },
      videos: [
        {
          id: 0,
          category: "people",
          name: "",
          src: "",
          img: ""
        }
      ],
      currentVideo: {
        id: 0,
        category: "people",
        name: "",
        src: "",
        img: ""
      },
      updateCurrentVideo: this.updateCurrentVideo.bind(this),
      handleVideoCardClick: this.handleVideoCardClick.bind(this)
    };
  }

  componentDidMount() {
    const context = this;
    axios
      .get("/jsontest")
      .then(res => {
        context.setState({
          pages: res.data.pages,
          videos: res.data.videos
        });
      })
      .catch(err => {
        throw err;
      });
  }

  updateCurrentVideo(vidId) {
    this.setState(state => ({ currentVideo: state.videos[vidId] }));
  }

  handleVideoCardClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    const {
      videos,
      pages,
      currentVideo,
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
              handleVideoCardClick={handleVideoCardClick}
            />
          </Route>
          <Route path="/schools/:school">
            <GalleryPage
              videos={videos}
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
            <Home videos={videos} handleVideoCardClick={handleVideoCardClick} />
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
