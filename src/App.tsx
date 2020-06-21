import React from "react";
import { useNetworkStatus } from "react-adaptive-hooks";
import "./App.css";

function App() {
  const { effectiveConnectionType } = useNetworkStatus();

  return (
    <div className="App">
      <h1>Adaptive loading experiments</h1>
      <div>{effectiveConnectionType}</div>
    </div>
  );
}

export default App;
