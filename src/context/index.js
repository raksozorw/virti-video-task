import { useState, createContext } from "react";

export const VideoContext = createContext(null);

export default function VideoProvider({ children }) {
  const [title, setTitle] = useState("Virti");
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hoverOnVideo, setHoverOnVideo] = useState(false);
  const [playCount, setPlayCount] = useState({
    image1: 0,
    image2: 0,
    image3: 0,
  });

  return (
    <VideoContext.Provider
      value={{
        title,
        setTitle,
        time,
        setTime,
        playCount,
        setPlayCount,
        hoverOnVideo,
        setHoverOnVideo,
        playing,
        setPlaying,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}
