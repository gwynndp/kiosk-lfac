/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import PropTypes from "prop-types";
// import { DefaultPlayer as Video } from "react-html5video";
import styled from "styled-components";
import MainNav from "./MainNav";
import Sidebar from "./Sidebar";

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
  let newVid = 0;
  if (diff > 0) {
    newVid = currVid < listLength - 1 ? currVid + 1 : 0;
  } else {
    newVid = currVid > 0 ? currVid - 1 : listLength - 1;
  }
  updateCurrentVideo(newVid);
}

export default function VideoView({ video, listLength, updateCurrentVideo }) {
  return (
    <>
      <MainNav gallery="false" />
      <StyledVideoView>
        <h1 style={{ fontSize: "42px" }}>{video.name}</h1>
        <video
          track={null}
          controls
          src={video.src}
          poster={video.img}
          style={{
            // width: `800px`,
            flexShrink: "1",
            flexGrow: "1",
            width: "100%"
          }}
          autoPlay
          allowFullScreen
          title={`Video interview of ${video.name}`}
        />

        {/* <Video
          autoPlay
          loop
          muted
          controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
          poster={video.img}
          onCanPlayThrough={() => {
            // Do stuff
          }}
        >
          <source src={video.src} />
          <track
            label="English"
            kind="subtitles"
            srcLang="en"
            src={video.src}
            default
          />
        </Video> */}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignSelf: "stretch",
            margin: "20px"
          }}
        >
          <Button
            onClick={() =>
              handlePrevNext(video.id, listLength, updateCurrentVideo, -1)}
          >
            Previous
          </Button>
          <Button
            onClick={() =>
              handlePrevNext(video.id, listLength, updateCurrentVideo, 1)}
          >
            Next
          </Button>
        </div>
      </StyledVideoView>
      <Sidebar />
    </>
  );
}

VideoView.propTypes = {
  video: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func])
  ).isRequired,
  listLength: PropTypes.number.isRequired,
  updateCurrentVideo: PropTypes.func.isRequired
};
