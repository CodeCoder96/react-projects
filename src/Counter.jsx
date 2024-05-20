import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function calculate(params) {
    setCounter(counter + params);
  }

  return (
    <div className="counter">
      <button onClick={() => calculate(1)}>+</button>
      <strong>{counter}</strong>
      <button onClick={() => calculate(-1)}>-</button>
    </div>
  );
}

export default Counter;
