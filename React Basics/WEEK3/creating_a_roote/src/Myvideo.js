import React from 'react'
import ReactPlayer from "react-player/youtube";
const Myvideo = () => {
  return (
    <div className="video">
      <ReactPlayer controls url="https://youtu.be/Pf03RTjeISE" />
    </div>
  );
}

export default Myvideo