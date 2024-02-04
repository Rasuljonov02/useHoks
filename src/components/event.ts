import React, { useRef, useEffect } from "react";

export function useMouseEvent() {
  const coordinates = {
    elementX: 0,
    elementY: 0
  };

  const ref = useRef<HTMLDivElement>(null);

  console.log('Initial coordinates:', coordinates);

  const handleMouseMove = (e: MouseEvent) => {
    coordinates.elementX = e.clientX;
    coordinates.elementY = e.clientY;
    console.log('Mouse coordinates:', coordinates);
  };

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('mousemove', handleMouseMove);

    
      return () => {
        currentRef.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return [coordinates, ref];
}
