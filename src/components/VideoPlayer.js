import { useContext, useEffect } from "react";
import { VideoContext } from "../context";
import video from "../assets/Big_Buck_Bunny_1080_10s_5MB.mp4";

export default function VideoPlayer() {
  const ctx = useContext(VideoContext);

  useEffect(() => {
    console.log(ctx);
  }, []);

  return (
    <div className='video-outer-div'>
      <div className='video-inner-div'>
        <video controls>
          <source src={video} type='video/mp4' />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div className='test-block'></div>
      </div>
    </div>
  );
}
