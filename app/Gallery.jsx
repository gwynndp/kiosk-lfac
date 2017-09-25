import React from 'react';
import VideoCard from './VideoCard';

export default function Gallery({ videos }) {
  return <div>{videos.map(video => <VideoCard key={video.name} name={video.name} src={video.src} />)}</div>;
}
