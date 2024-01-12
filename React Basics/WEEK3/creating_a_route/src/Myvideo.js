import React from 'react'
import ReactPlayer from "react-player/youtube";
const Myvideo = () => {
    const videoUrl="https://youtu.be/Pf03RTjeISE"
  return (
    <div className="video">
      <ReactPlayer controls url={videoUrl} />
    </div>
  );
}

export default Myvideo