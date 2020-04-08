import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//import { render } from 'enzyme';

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
    this.setState({
      videos: this.props.videos,
      video: this.props.video
    });
  }

  handlePrevNext(diff) {
    const currIndex = this.state.video.id;
    let newIndex = 0;
    if (diff > 0) {
      newIndex = currIndex < this.state.videos.length - 1 ? currIndex + 1 : 0;
    } else {
      newIndex = currIndex > 0 ? currIndex - 1 : this.state.videos.length - 1;
    }
    this.setState(
      {
        video: this.state.videos[newIndex]
      },
      () => this.props.updateCurrentVideo(this.state.video)
    );
  }

  render() {
    return (
      <StyledVideoView>
        <h1>{this.props.video.name}</h1>
        {/* WHY DOESN'T THIS WORK
        <video src={video.src} style={{ width: 850 +'px', height: 480+'px'}} allowFullScreen title={`iframe for YouTube video ${video.name}`} /> */}
        <iframe
          src={this.props.video.src}
          style={{ width: 850 + 'px', height: 480 + 'px' }}
          frameBorder="1"
          allowFullScreen
          title={`iframe for YouTube video ${this.props.video.name}`}
        />
        <Button onClick={() => this.handlePrevNext(-1)}>Previous</Button>
        <Button onClick={() => this.handlePrevNext(1)}>Next</Button>
      </StyledVideoView>
    );
  }
}

VideoView.propTypes = {
  video: PropTypes.objectOf(),
  videos: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};
