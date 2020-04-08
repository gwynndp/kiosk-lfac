import React from 'react';
import renderer from 'react-test-renderer';
import GalleryCard from '../GalleryCard';

test('should render a GalleryCard', () => {
  const props = {
    key: 4,
    name: 'Ashley Sanchez',
    img: 'images/videos/Ashley-Sanchez.jpg',
    video: {
      id: 4,
      category: 'people',
      name: 'Ashley Sanchez',
      src: 'videos/Ashley-Sanchez.mp4',
      img: 'images/videos/Ashley-Sanchez.jpg'
    },
    handleVideoCardClick: () => {}
  };
  const tree = renderer
    .create(
      <GalleryCard
        key={props.id}
        name={props.name}
        img={props.img}
        video={props.video}
        handleVideoCardClick={props.handleVideoCardClick}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// should direct to a VideoPage when clicked  //DOES THIS TEST GO HERE?
