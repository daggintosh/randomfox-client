import React from 'react';
import fox from './fox.png'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <img src={"https://dagg.xyz/randomfox/images/" + (Math.floor(Math.random() * 124) + 1) + ".jpg"} className="fox" alt="Fox!" id="foximg"/>
      </div>
    
      <div className="Background">
        <img src={fox} alt="btn" className="Button" onClick={waitUntil}></img>
      </div>
    </React.Fragment>
  );
}

function waitUntil(){
  setTimeout(z=>{ window.location.reload(); }, 1000)
}

export default App;

//(Math.floor(Math.random() * 124) + 1)