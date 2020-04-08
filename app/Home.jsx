import React from 'react';
import PropTypes from 'prop-types';
import GalleryPage from './GalleryPage';

export default function Home({ videos, showVideoView, handleVideoCardClick }) {
  return (
    <React.Fragment>
      <GalleryPage
        videos={videos}
        showVideoView={showVideoView}
        handleVideoCardClick={handleVideoCardClick}
      />
    </React.Fragment>
  );
}

Home.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  showVideoView: PropTypes.bool.isRequired,
  handleVideoCardClick: PropTypes.func.isRequired,
};
