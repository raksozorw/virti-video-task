import React from "react";
import image1 from "../assets/images/image1.png";
import { useContext, useEffect, useState } from "react";
import { VideoContext } from "../context";

export default function Image(props) {
  const ctx = useContext(VideoContext);
  const [count, setCount] = useState(0);

  const handleLoad = () => {
    const oldCount = count;
    setTimeout(() => {
      setCount(oldCount + 1);
    }, props.end - props.start + 10);
  };

  useEffect(() => {
    console.log(ctx.playCount);
  }, [ctx.playCount]);

  return (
    ctx.time >= props.start &&
    ctx.time <= props.end &&
    count < props.showsUp && (
      <img
        src={props.image}
        alt={props.name}
        className={props.name}
        onLoad={handleLoad}
      ></img>
    )
  );
}
