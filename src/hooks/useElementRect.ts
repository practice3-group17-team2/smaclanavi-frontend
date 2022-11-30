import { useEffect, useState, useCallback } from 'react';

export const useElementRect = <T extends HTMLElement>(
  ref: React.RefObject<T> | null,
  updateTiming: string[],
): DOMRect | undefined => {
  const [rect, setRect] = useState<DOMRect | undefined>(undefined);

  const updateRect = useCallback(() => {
    if (ref?.current) {
      setRect(ref.current.getBoundingClientRect());
    } else {
      setRect(undefined);
    }
  }, [ref]);

  useEffect(() => {
    updateRect(); // initial call
    updateTiming.forEach((event) => {
      window.addEventListener(event, updateRect);
    });

    return () => {
      updateTiming.forEach((event) => {
        window.removeEventListener(event, updateRect);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return rect;
};
