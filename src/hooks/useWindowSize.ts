import { useEffect, useState } from 'react';

type WindowSize = { height: number; width: number };

export const useWindowSize = (): WindowSize => {
  const [size, setSize] = useState<WindowSize>({ height: 0, width: 0 });
  useEffect(() => {
    const updateSize = (): void => {
      setSize({ height: window.innerHeight, width: window.innerWidth });
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, [size.width, size.height]);

  return size;
};
