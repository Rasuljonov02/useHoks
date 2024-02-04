import { useRef, useEffect, useState } from "react";

export function useHover() {
  const [hover, setHover] = useState<any>({ a: null });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    setHover(() => ({ a: e }));
    console.log('Mouse hover:', hover); 
  };

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      currentRef.addEventListener('mousemove', handleMouseMove);

      return () => {
        currentRef.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [ref]);

  return [hover, ref];
}
