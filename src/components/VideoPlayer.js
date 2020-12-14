import { useContext, useRef, useState } from "react";
import { VideoContext } from "../context";
import videoMP4 from "../assets/Big_Buck_Bunny_1080_10s_5MB.mp4";
import videoM4V from "../assets/virtimov.m4v";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import Image from "./Image";
import Controls from "./Controls";

export default function VideoPlayer() {
  const ctx = useContext(VideoContext);
  const videoRef = useRef(null);

  const timer = () => {
    const timestamp = videoRef.current.currentTime * 1000;
    ctx.setTime(timestamp);
  };

  // 3D video movement //
  const [rotate, setRotate] = useState({ transform: "rotateY(0)" });

  const handleMouseMove = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;

    setRotate({ transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)` });
  };

  const handleMouseLeave = () => {
    setRotate({ transform: `rotateY(0deg) rotateX(0deg)`, transition: "0.5s" });
  };

  return (
    <div className='video-outer-div'>
      <div
        className='video-inner-div'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={rotate}
        onMouseOver={() => ctx.setHoverOnVideo(true)}
        onMouseOut={() => ctx.setHoverOnVideo(false)}
      >
        <video
          controls
          autoPlay
          playsInline
          onTimeUpdate={timer}
          ref={videoRef}
          onEnded={() => ctx.setPlaying(false)}
          onPause={() => ctx.setPlaying(false)}
          onPlay={() => {
            ctx.setPlaying(true);
          }}
        >
          <source controls src={videoMP4} type='video/mp4' />
          <source controls src={videoM4V} type='video/mp4' />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div className='images'>
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
      <Controls videoRef={videoRef} />
    </div>
  );
}
