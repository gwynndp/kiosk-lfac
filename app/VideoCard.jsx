import React from 'react';

export default function VideoCard(video) {
  return (
    <div>
      <h1>{video.name}</h1>
      <iframe src={`${video.src}`} frameBorder="1" allowFullScreen title={`iframe for ${video.name}`} />
    </div>
  );
}
