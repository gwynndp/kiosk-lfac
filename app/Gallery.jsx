import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GalleryCard from "./GalleryCard";

const StyledGallery = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-grow: 1;
  height: 580px; //auto; //580px for Firefox, get element.clientHeight?
  overflow: scroll;
`;

export default function Gallery({ videos, handleVideoCardClick }) {
  return (
    <StyledGallery id="gallery">
      {videos.map(video => {
        return (
          <Link
            key={video.id}
            to="/video"
            style={{ textDecoration: "none", color: "black" }}
          >
            <GalleryCard
              video={video}
              handleVideoCardClick={handleVideoCardClick}
            />
          </Link>
        );
      })}
      <div className="spacer" style={{ flexGrow: "1" }} />
    </StyledGallery>
  );
}

Gallery.propTypes = {
  // videos: PropTypes.arrayOf(
  //   PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  // ).isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ).isRequired,
  handleVideoCardClick: PropTypes.func.isRequired
};

// An error with the videos PropTypes (above) caused the error: "Warning: Failed prop type: Invalid prop `videos[0]` supplied to `Gallery`."
