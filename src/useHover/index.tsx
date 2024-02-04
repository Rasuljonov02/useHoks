import { useHover } from "./UseHover";

const getRandomColor = () => {
  const colors = ["green", "blue", "purple", "red", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const App5 = () => {
  const [ref, hovering] = useHover();

  const backgroundColor = hovering ? `var(--${getRandomColor()})` : "var(--charcoal)";

  return (
    <section className="w-[150px] h-[150px] bg-slate-300">
      <h1>useHover</h1>
      <article ref={ref} style={{ backgroundColor }}>
        Hovering? {hovering ? "Yes" : "No"}
      </article>
    </section>
  );
};

export default App5;
