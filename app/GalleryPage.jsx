import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SideBar from './Sidebar';
import MainNav from './MainNav';
import Gallery from './Gallery';

const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 70%;
`;

const GalleryHeader = styled.header`
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 0 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 24px;
`;

export default function GalleryPage(props) {
  return (
    <React.Fragment>
      <MainNav gallery='true' />
      <GalleryWrapper>
        <GalleryHeader>
          <h1>Meet the People</h1>
        </GalleryHeader>
        <Gallery
          videos={props.videos}
          handleVideoCardClick={props.handleVideoCardClick}
        />
      </GalleryWrapper>
      <SideBar />
    </React.Fragment>
  );
}

GalleryPage.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  handleVideoCardClick: PropTypes.func.isRequired,
};
