import "./styles.css";
import VideoPlayer from "./components/VideoPlayer";

import DarkenOnHover from "./components/DarkenOnHover";

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <DarkenOnHover>
        <VideoPlayer />
      </DarkenOnHover>
    </div>
  );
}

export default App;
