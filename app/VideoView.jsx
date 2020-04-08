import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainNav from './MainNav';
import Sidebar from './Sidebar';

const StyledVideoView = styled.div`
  background-color: white;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 70%;
`;

const Button = styled.button`
  background-color: #ecd72b;
  border-radius: 6px;
  width: 40%;
  padding: 15px;
  margin: 20px;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
`;

function handlePrevNext(vidId, listLength, updateCurrentVideo, diff) {
  const currVid = vidId;
  let newIndex = 0;
  if (diff > 0) {
    newVid = currVid < listLength - 1 ? currVid + 1 : 0;
  } else {
    newVid = currVid > 0 ? currVid - 1 : listLength - 1;
  }
  updateCurrentVideo(newIndex);
}

export default function VideoView({ video, listLength, updateCurrentVideo }) {
  return (
    <React.Fragment>
      <MainNav gallery='false' />
      <StyledVideoView>
        <h1 style={{ fontSize: '42px' }}>{video.name}</h1>
        <video
          controls
          src={video.src}
          poster={video.img}
          style={{
            //width: `800px`,
            flexShrink: '1',
            flexGrow: '1',
            width: '100%',
          }}
          autoPlay
          allowFullScreen
          title={`Video interview of ${video.name}`}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'stretch',
            margin: '20px',
          }}
        >
          <Button
            onClick={() =>
              handlePrevNext(video.id, listLength, updateCurrentVideo, -1)
            }
          >
            Previous
          </Button>
          <Button
            onClick={() =>
              handlePrevNext(video.id, listLength, updateCurrentVideo, 1)
            }
          >
            Next
          </Button>
        </div>
      </StyledVideoView>
      <Sidebar />
    </React.Fragment>
  );
}

VideoView.propTypes = {
  video: PropTypes.object.isRequired,
  listLength: PropTypes.number.isRequired,
  updateCurrentVideo: PropTypes.func.isRequired,
};
