import React from "react";
import { useHardwareConcurrency } from "react-adaptive-hooks/hardware-concurrency";
import { useMemoryStatus } from "react-adaptive-hooks/memory";
import { useNetworkStatus } from "react-adaptive-hooks/network";
import { useSaveData } from "react-adaptive-hooks/save-data";
import "./App.css";

function App() {
  const { effectiveConnectionType } = useNetworkStatus();
  const { saveData } = useSaveData();
  const hardwareConcurrency = useHardwareConcurrency();
  const { deviceMemory } = useMemoryStatus();
  return (
    <div className="App">
      <h1>Adaptive loading experiments</h1>
      <div>
        Network: <span>{effectiveConnectionType}</span>
      </div>
      <div>
        Save Data: <span>{String(saveData)}</span>
      </div>
      <div>
        CPU Cores:
        <span>
          {hardwareConcurrency.unsupported
            ? "Unsupported"
            : hardwareConcurrency.numberOfLogicalProcessors}
        </span>
      </div>
      <div>
        Memory: <span>{String(deviceMemory)}</span>
      </div>
    </div>
  );
}

export default App;
