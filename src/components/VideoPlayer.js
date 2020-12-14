import { useContext, useEffect, useRef, useState, useCallback } from "react";
import { VideoContext } from "../context";
import video from "../assets/Big_Buck_Bunny_1080_10s_5MB.mp4";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import Image from "./Image";
import Controls from "./Controls";

export default function VideoPlayer() {
  const ctx = useContext(VideoContext);
  const videoRef = useRef(null);
  const videoTestRef = useRef(null);

  const [rotate, setRotate] = useState({ transform: "rotateY(0)" });

  //   const handleTimeUpdate = (e) => {
  //     let current = Math.round((e.target.currentTime * 1000) / 250) * 250;
  //     ctx.setTime(current);
  //   };

  const handleMouseMove = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;

    setRotate({ transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)` });
    console.log(rotate);
  };

  const handleMouseLeave = () => {
    setRotate({ transform: `rotateY(0deg) rotateX(0deg)`, transition: "0.5s" });
  };

  const timer = () => {
    const timestamp = videoTestRef.current.currentTime * 1000;
    console.log(timestamp);
    ctx.setTime(timestamp);
    // setTimeout(() => {
    //   const timestamp = videoTestRef.current.currentTime * 1000;
    //   console.log(timestamp);
    //   ctx.setTime(timestamp);
    // }, 1000);
  };

  //   useEffect(() => {
  //     timer();
  //   }, [ctx.time]);

  return (
    <div className='video-outer-div'>
      <div
        className='video-inner-div'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={rotate}
        ref={videoRef}
      >
        <video controls onTimeUpdate={timer} ref={videoTestRef}>
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
      <Controls videoRef={videoTestRef} />
    </div>
  );
}
