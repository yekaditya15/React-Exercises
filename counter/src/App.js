import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <h2>Count: {count}</h2>
            <button
              style={{ marginRight: "10px" }}
              className="btn btn-success"
              onClick={handleIncrement}
            >
              Increment
            </button>
            <button
              style={{ marginRight: "10px" }}
              className="btn btn-danger"
              onClick={handleDecrement}
            >
              Decrement
            </button>
            <button className="btn btn-secondary" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
