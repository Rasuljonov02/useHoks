import React from 'react';
import { usePrevious } from './Use';

function getRandomColor() {
  const colors = ['green', 'blue', 'purple', 'red', 'pink'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function App1() {
  const [color, setColor] = React.useState(getRandomColor());
  const previousColor = usePrevious(color);

  const handleClick = () => {
    function getNewColor() {
      let newColor;
      do {
        newColor = getRandomColor();
      } while (color === newColor);

      setColor(newColor);
    }

    getNewColor();
  };

  return (
    <section className="mt-5 grid place-items-center">
      <h1>usePrevious</h1>
      <button onClick={handleClick}>Next</button>
      <article className=" flex items-center gap-4">
        <figure
          style={{ background: `${previousColor}` }}
          className="grid h-[150px] w-[150px] place-items-center bg-slate-300"
        >
          <p>salom</p>
          <figcaption>Previous: {previousColor}</figcaption>
        </figure>

        <figure style={{ background: `${color}` }} className="grid h-[150px] w-[150px] place-items-center bg-slate-300">
          <p>hello</p>
          <figcaption>Current: {color}</figcaption>
        </figure>
      </article>
    </section>
  );
}
