import { useState, useEffect } from 'react';

export default function useRenderCount() {
  const [Count, set] = useState(0);

  useEffect(() => {
    set(prevCount => prevCount + 1);
  }, []);

  return Count;
}
