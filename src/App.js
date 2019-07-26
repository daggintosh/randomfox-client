import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={'https://dagg.xyz/randomfox/images/' + (Math.floor(Math.random() * 124) + 1) + ".jpg"} className="fox" alt="Fox!" />
    </div>
  );
}

export default App;
