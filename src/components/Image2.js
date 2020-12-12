import React from "react";
import image1 from "../assets/images/image1.png";
import { useContext } from "react";
import { VideoContext } from "../context";

export default function Image1() {
  const ctx = useContext(VideoContext);

  return (
    ctx.time >= 3500 &&
    ctx.time <= 5000 && <img src={image1} alt='image1' className='image1'></img>
  );
}
