import React from "react";
import { useContext, useState } from "react";
import { VideoContext } from "../context";
import { PlaySVG, PauseSVG, RestartSVG } from "../assets/svgs/svgs";
import Cube from "./Cube";

export default function Controls(props) {
  const { playing, setPlaying } = useContext(VideoContext);
  const [clicked, setClicked] = useState(false);
  const buttonIconStyle = {
    color: "white",
    height: "150",
    width: "150",
    strokeWidth: 4,
  };

  const playVideo = () => {
    props.videoRef.current.play();

    setPlaying(true);
  };

  const pauseVideo = () => {
    props.videoRef.current.pause();
    setPlaying(false);
  };

  const restartVideo = () => {
    if (!clicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }

    props.videoRef.current.pause();
    props.videoRef.current.currentTime = 0;
    props.videoRef.current.play();
    setPlaying(true);
  };

  return (
    <div className='controls'>
      <Cube
        front={
          <button onClick={playVideo}>
            <PlaySVG buttonIconStyle={buttonIconStyle} />
          </button>
        }
        back={
          <button onClick={pauseVideo}>
            <PauseSVG buttonIconStyle={buttonIconStyle} />
          </button>
        }
        spinTrigger={playing}
      />

      <Cube
        front={
          <button onClick={restartVideo}>
            <RestartSVG buttonIconStyle={buttonIconStyle} />
          </button>
        }
        back={
          <button onClick={restartVideo}>
            <RestartSVG buttonIconStyle={buttonIconStyle} />
          </button>
        }
        spinTrigger={clicked}
      />
    </div>
  );
}
