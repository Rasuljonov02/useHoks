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

  const backgroundColor = hovering ? ` background-color:${getRandomColor()}` : 'background-color:charcoal';

  return (
    <section className="grid h-[350px] w-[350px] place-items-center">
      <h1>useHover</h1>
      <article
        ref={Ref}
        style={{ backgroundColor }}
        className="grid h-[150px] w-[150px] place-items-center bg-slate-500"
      >
        Hovering? {hovering ? 'Yes' : 'No'}
      </article>
    </section>
  );
};

export default App5;
