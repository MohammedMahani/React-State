import { useState } from "react";

const Ex1 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <span>{counter}</span>
      <button onClick={() => setCounter((count) => count + 1)}>
        Inc
      </button>
      <button onClick={() => setCounter((count) => (count= 0))}>
        Reset
      </button>
      <button onClick={() => setCounter((count) => count - 1)}>
        Dec
      </button>
    </div>
  );
};

export default Ex1;