import { useContext, useEffect, useRef, useState, useCallback } from "react";
import { VideoContext } from "../context";
import video from "../assets/Big_Buck_Bunny_1080_10s_5MB.mp4";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import Image from "./Image";

export default function VideoPlayer() {
  const ctx = useContext(VideoContext);
  const videoRef = useRef(null);

  const handleTimeUpdate = (e) => {
    let current = Math.round((e.target.currentTime * 1000) / 250) * 250;
    // console.log(Math.round((e.target.currentTime * 1000) / 250) * 250);
    ctx.setTime(current);
  };

  return (
    <div className='video-outer-div'>
      <div className='video-inner-div'>
        <video controls ref={videoRef} onTimeUpdate={handleTimeUpdate}>
          <source src={video} type='video/mp4' />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div className='test-block'>
          <Image
            name='image1'
            start={3500}
            end={5000}
            image={image1}
            showsUp={1}
          />
          <Image
            name='image2'
            start={6000}
            end={8000}
            image={image2}
            showsUp={2}
          />
          <Image
            name='image3'
            start={7000}
            end={8500}
            image={image3}
            showsUp={3}
          />
        </div>
      </div>
    </div>
  );
}
