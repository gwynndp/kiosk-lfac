import React from "react";
import PropTypes from "prop-types";
import GalleryPage from "./GalleryPage";

export default function Home({ videos, handleVideoCardClick }) {
  return (
    <>
      <GalleryPage
        videos={videos}
        handleVideoCardClick={handleVideoCardClick}
      />
    </>
  );
}

Home.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ).isRequired,
  handleVideoCardClick: PropTypes.func.isRequired
};
