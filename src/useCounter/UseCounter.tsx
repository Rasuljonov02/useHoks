import { useState } from 'react';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  set: (value: number) => void;
}

const useCounter = (defaultCount: number, set: number): CounterState => {
  const [count, setCount] = useState(defaultCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(defaultCount);
  };

  const seta = () => {
    setCount(set);
  };

  return {
    count,
    increment,
    decrement,
    reset,
    set: seta
  };
};

export default useCounter;
