import { useState, createContext } from "react";

export const VideoContext = createContext(null);

export default function VideoProvider({ children }) {
  const [title, setTitle] = useState("Virti");
  const [time, setTime] = useState(0);
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
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}
