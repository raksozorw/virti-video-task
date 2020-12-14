import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import VideoProvider from "./context";

ReactDOM.render(
  <React.StrictMode>
    <VideoProvider>
      <App />
    </VideoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
