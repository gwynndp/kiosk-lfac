import React from 'react';

// VIDEO CARD
export default function VideoCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <iframe src={`${props.src}`} frameBorder="1" allowFullScreen title={`iframe for ${props.name}`} />
    </div>
  );
}
