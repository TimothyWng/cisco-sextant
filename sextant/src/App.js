import './App.css';
import React from 'react'
import IPDisplay from './components/IPDisplay';
import LatencyDisplay from './components/LatencyDisplay';

function App() {
  return (
    <div className="App">
      <h1 className="banner">Sextant</h1>
      <div className="exhibit">
        <p>IP's:</p>
        <IPDisplay version="IPv4" />
        <IPDisplay version="IPv6" />
        <LatencyDisplay />
      </div>
    </div>
  );
}

export default App;
