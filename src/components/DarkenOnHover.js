import React from "react";
import { useContext } from "react";
import { VideoContext } from "../context";

export default function DarkenOnHover(props) {
  const ctx = useContext(VideoContext);
  return (
    <div
      className='darken'
      style={
        ctx.hoverOnVideo
          ? {
              backgroundColor: "rgb(75, 189, 189)",
              minHeight: "100vh",
              transition: "5s ease",
            }
          : {
              transition: "0.5s",
              minHeight: "100vh",
            }
      }
    >
      {props.children}
    </div>
  );
}
