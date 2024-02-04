import React from 'react';
import useCounter from './UseCounter';

const YourComponent: React.FC = () => {
  const { count, increment, decrement, reset, set } = useCounter(0, 6);

  return (
    <div className="mt-8 grid h-[80%] w-[80%] place-items-center">
      <h1>useCounter</h1>
      <p>Count: {count}</p>
      <div className="flex items-start">
        <button disabled={count >= 10} onClick={increment}>
          Increment
        </button>
        <button disabled={count <= 0} onClick={decrement}>
          Decrement
        </button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => set(6)}>Set to 6</button>
      </div>
    </div>
  );
};

export default YourComponent;
