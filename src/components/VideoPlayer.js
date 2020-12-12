import React from "react";
import video from "../assets/Big_Buck_Bunny_1080_10s_5MB.mp4";

export default function VideoPlayer() {
  return (
    <div>
      <video controls width='550'>
        <source src={video} type='video/mp4' />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
}
