import React, { useState, useContext } from "react";
import { VideoContext } from "../context";

export default function Cube(props) {
  const { playing, setPlaying } = useContext(VideoContext);

  return (
    <div className='scene'>
      <div className='cube' style={props.spinOn}>
        <div className='cube__face cube__face--front'> {props.front}</div>

        <div className='cube__face cube__face--back'>{props.back}</div>
        <div className='cube__face cube__face--right'></div>
        <div className='cube__face cube__face--left'></div>
        <div className='cube__face cube__face--top'></div>
        <div className='cube__face cube__face--bottom'></div>
      </div>
    </div>
  );
}
