import React from "react";
import { useParams } from "react-router-dom";

const VideoDetails = () => {
  const { videoId } = useParams();
  console.log(videoId);
  return <div> {videoId} Video Details</div>;
};

export default VideoDetails;
