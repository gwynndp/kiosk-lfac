import React from 'react';
import VideoCard from './VideoCard';

// export default function Gallery({ videos, list }) {
//   console.log('GALLERY videos', videos);
//   const videoCards = videos.map(function(video) {
//     return <VideoCard key={video.name} name={video.name} src={video.src} video={video} />;
//   });
//   console.log('videoCards', videoCards);

//   //THIS WORKS
//   //{videos.map(video => <VideoCard key={video.name} name={video.name} src={video.src} video={video} />)}

//   return <div>{videoCards}</div>;
// }

export default function Gallery(props) {
  console.log('GALLERY props.videos', props.videos);
  const videoCards = props.videos.map(function(video) {
    return <VideoCard key={video.name} name={video.name} src={video.src} video={video} />;
  });
  console.log('videoCards', videoCards);

  //THIS WORKS
  //{videos.map(video => <VideoCard key={video.name} name={video.name} src={video.src} video={video} />)}

  return <div>{videoCards}</div>;
}
