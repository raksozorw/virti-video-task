import { useContext, useEffect } from "react";
import { VideoContext } from "../context";
import video from "../assets/Big_Buck_Bunny_1080_10s_5MB.mp4";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

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
        <div className='test-block'>
          <img src={image1} alt='image1' className='image1'></img>
          <img src={image2} alt='image2' className='image2'></img>
          <img src={image3} alt='image3' className='image3'></img>
        </div>
      </div>
    </div>
  );
}
