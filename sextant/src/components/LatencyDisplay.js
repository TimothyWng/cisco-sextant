import React, { useEffect, useState } from 'react';
const ws = new WebSocket('ws://localhost:55455');

function LatencyDisplay() {
  const [latency, setLatency] = useState(null);
  

   useEffect(() => {
    // Create a new WebSocket instance
    

    // Handle incoming messages
    ws.onmessage = (event) => {
        const packetLatency = new Date().getTime() - event.data; // Calculate latency
        setLatency(packetLatency); // Update the latency state
    };

  }, []);

  return (
    <div className="latency-display">
      <h2>Packet Latency</h2>
      {latency !== null ? (
        <p>{latency} ms</p>
      ) : (
        <p>Waiting for data...</p>
      )}
    </div>
  );
}

export default LatencyDisplay;
