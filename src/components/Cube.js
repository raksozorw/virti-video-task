import React from "react";

export default function Cube(props) {
  return (
    <div className='scene'>
      <div
        className='cube'
        style={
          props.spinTrigger
            ? { transform: "rotateY(180deg)" }
            : { transform: "rotateY(0deg)" }
        }
      >
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
