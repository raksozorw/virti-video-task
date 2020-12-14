import React from "react";
import { useContext, useState } from "react";
import { VideoContext } from "../context";

export default function Image(props) {
  const ctx = useContext(VideoContext);
  const [count, setCount] = useState(0);

  const handleLoad = () => {
    const oldCount = count;
    setTimeout(() => {
      setCount(oldCount + 1);
    }, props.end - props.start);
  };

  // as soon as image appears, it counts an appearance
  // but, if we count right away, it disappears, so we use setTimeout
  // but, if we pause and the timeout ends, the image disappears
  // so we also render the image if the playing state is false, and the count is only one less than max

  return (
    <div>
      {ctx.time >= props.start &&
        ctx.time <= props.end &&
        count < props.showsUp && (
          <img
            src={props.image}
            alt={props.name}
            className={props.name}
            onLoad={handleLoad}
          ></img>
        )}
      {ctx.time >= props.start &&
        ctx.time <= props.end &&
        !ctx.playing &&
        count < props.showsUp + 1 && (
          <img src={props.image} alt={props.name} className={props.name}></img>
        )}
    </div>
  );
}
