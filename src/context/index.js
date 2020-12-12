import { useState, createContext } from "react";

export const VideoContext = createContext(null);

export default function VideoProvider({ children }) {
  const [title, setTitle] = useState("Virti");

  return (
    <VideoContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}
