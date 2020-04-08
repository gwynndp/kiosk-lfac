import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled('h1')`
  display: flex;
  align-items: flex-end;
  font-size: 18px;
  text-transform: uppercase;
  height: 40px;
  margin: 5px;
  border-bottom: 1px solid black;
`;

const Image = styled('img')`
  width: 190px;
  height: 250px;
`;

const Card = styled.div`
  width: 190px;
  background-color: white;
  padding: 10px;
  margin: 20px;
`;

export default function GalleryCard({ video, handleVideoCardClick }) {
  return (
    <Card
      onClick={() => {
        handleVideoCardClick(video);
      }}
    >
      <StyledTitle>{video.name}</StyledTitle>
      <Image src={video.img} alt={`Video titled ${video.name}`} />
    </Card>
  );
}

GalleryCard.propTypes = {
  video: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func])
  ),
  handleVideoCardClick: PropTypes.func.isRequired,
};
