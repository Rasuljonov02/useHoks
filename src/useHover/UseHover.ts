import { useRef, useEffect, useState } from 'react';

export function useHover() {
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = () => {
    setHover(prevHover => {
      console.log('Mouse hover:', !prevHover);
      return true;
    });
  };

  const handleMouseLeave = () => {
    setHover(prevHover => {
      console.log('Mouse hover:', false);
      return false;
    });
  };

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      currentRef.addEventListener('mousemove', handleMouseMove);
      currentRef.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        currentRef.removeEventListener('mousemove', handleMouseMove);
        currentRef.removeEventListener('mouseleave', handleMouseLeave);

        setHover(false);
      };
    }
  }, [ref]);

  return [ref, hover];
}
