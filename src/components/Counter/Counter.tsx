import { useState } from "react";
import '../styles/Counter.scss';
function Counter() {
  const [x, setX] = useState(0);

  const handleIncrement = () => {
    setX((prevX) => prevX + 1);
  };

  const handleDecrement = () => {
    setX((prevX) => prevX - 1);
  };

  return (
    <div className="counter">
      <button onClick={handleIncrement} className="increment-button">
        +
      </button>
      <p className="count">{x}</p>
      <button onClick={handleDecrement} className="decrement-button">
        -
      </button>
    </div>
  );
}

export default Counter;

