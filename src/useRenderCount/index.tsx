import * as React from 'react';
import useRenderCount from './useRenderCount';

export default function Render() {
    const [count, setCount] = React.useState(0);
    const renderCount = useRenderCount();

  return (
    <section className='mt-8 grid h-[80%] w-[80%] place-items-center'>
      <header>
        <h1>useRenderCount</h1>
      </header>
      <button onClick={() => setCount(c => c + 1)}>
        tugamadi hali
      </button>
      <p>Count: {count}</p>
      <p>Render Count: {renderCount}</p>
    </section>
  );
}
