import React, { RefObject } from 'react';
import { useMouseEvent } from './event';

interface UseMouseProps {}

const UseMouse: React.FC<UseMouseProps> = () => {
  const [mouse, ref] = useMouseEvent();
  console.log('log', mouse);

  return (
    <div className="flex">
      <section className="grid h-[80%] w-[80%] place-items-center">
        <h1>useMouse</h1>
        <div
          ref={ref as RefObject<HTMLDivElement>}
          style={{ width: '600px', height: '600px' }}
          className="grid place-items-center bg-slate-400 "
        >
          <h1 className="grid h-[200px] w-[200px] place-items-center bg-yellow-300  hover:bg-yellow-950 hover:text-white">
            salom
          </h1>
        </div>
      </section>
      <div>
        <h3>Mouse Position </h3>

        {mouse && 'elementX' in mouse && 'elementY' in mouse && (
          <div>
            <h4>X: {mouse.elementX}</h4>
            <h4>Y: {mouse.elementY}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default UseMouse;
// useObjectState
