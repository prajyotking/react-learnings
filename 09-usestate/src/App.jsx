import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <div className="box2">
        <h1 className="ap">AURA POINTS</h1>
      <h1 className="num">{num}</h1>
      </div>
      <div className="box1">
        <button
          onClick={() => {
           setNum(num+1)
          }}
          className="btn1"
        >
          Increase
        </button>
        <button
          onClick={() => {
           setNum(num-1)
          }}
          className="btn2"
        >
          Decrese
        </button>
      </div>
    </div>
  );
};

export default App;
