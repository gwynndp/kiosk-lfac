import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledVideoView = styled.div`
  background-color: white;
  padding: 20px 50px;
  position: absolute;
  top: 50px;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Button = styled.button`
  background-color: #ecd72b;
  border-radius: 6px;
  width: 40%;
  padding: 15px;
  margin: 20px;
  font-size: 20px;
  font-weight: 600;
  border: none;
`;

/*
Trying update the videos by turning this into a stateful component didnt' work
Had to update the state in the parent component to make the video update

Does having a stateful component inside a parent component not work, or is it because the parent component initially set the state for the video in this component?
*/

export default class VideoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      video: null
    };
  }

  componentDidMount() {
    const { video, videos, updateCurrentVideo } = this.props;
    this.setState({
      videos,
      video,
      updateCurrentVideo
    });
  }

  handlePrevNext(diff) {
    const { video, videos, updateCurrentVideo } = this.state;
    const curr = video.id;
    let newIndex = 0;
    if (diff > 0) {
      newIndex = curr < videos.length - 1 ? curr + 1 : 0;
    } else {
      newIndex = curr > 0 ? curr - 1 : videos.length - 1;
    }
    this.setState(
      {
        video: videos[newIndex]
      },
      () => updateCurrentVideo(video)
    );
  }

  render() {
    const { video } = this.props;
    return (
      <StyledVideoView>
        <h1>{video.name}</h1>
        {/* WHY DOESN'T THIS WORK
        <video src={video.src} style={{ width: 850 +'px', height: 480+'px'}} allowFullScreen title={`iframe for YouTube video ${video.name}`} /> */}
        <iframe
          src={video.src}
          style={{ width: `${850}px`, height: `${480}px` }}
          frameBorder="1"
          allowFullScreen
          title={`iframe for YouTube video ${video.name}`}
        />
        <Button onClick={() => this.handlePrevNext(-1)}>Previous</Button>
        <Button onClick={() => this.handlePrevNext(1)}>Next</Button>
      </StyledVideoView>
    );
  }
}

VideoView.propTypes = {
  video: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func])
  ).isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func])
    )
  ).isRequired,
  updateCurrentVideo: PropTypes.func.isRequired
};
