import { useHover } from './UseHover';
import { ReactElement, RefObject } from 'react';

const getRandomColor = () => {
  const colors = ['green', 'blue', 'purple', 'red', 'pink'];
  const a = colors[Math.floor(Math.random() * colors.length)];
  console.log(a);

  return a;
};

const App5 = (): ReactElement => {
  const [ref, hovering] = useHover();
  const Ref = ref as RefObject<HTMLElement>;

  const backgroundColor = hovering ? getRandomColor() : 'charcoal';

  return (
    <section className="grid h-[350px] w-[350px] place-items-center border-black">
      <h1>useHover</h1>
      <article
        ref={Ref}
        style={{ backgroundColor }}
        className="grid h-[150px] w-[150px] place-items-center rounded-2xl rounded-sm border-slate-950 bg-slate-500 hover:cursor-grab"
      >
        Hovering? {hovering ? 'Yes' : 'No'}
      </article>
    </section>
  );
};

export default App5;
