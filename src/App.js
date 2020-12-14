import "./styles.css";
import VideoPlayer from "./components/VideoPlayer";
import { useContext } from "react";
import { VideoContext } from "./context";

function App() {
  const ctx = useContext(VideoContext);

  return (
    <div className='App'>
      <header className='App-header'></header>
      <div
        style={{
          backgroundImage: "radial-gradient(black, teal)",
          minHeight: "100vh",
        }}
      >
        <VideoPlayer />
      </div>
    </div>
  );
}

export default App;
