import { RefObject, useEffect, useState } from 'react';

type Props = {
  ref: RefObject<HTMLElement>;
};

export type ScrollDirection = 'up' | 'down';
export function useAppBar({ ref }: Props): { scrollDirection: ScrollDirection } {
  const [lastY, setLastY] = useState<number>(0);
  const [tick, setTick] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');
  useEffect(() => {
    if (tick) {
      const y = window.scrollY;
      if (y > lastY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setTick(false);
      setLastY(y);
    }
  }, [tick]);
  useEffect(() => {
    if (!ref.current) return;
    window.addEventListener('scroll', function (_e) {
      window.requestAnimationFrame(() => {
        setTick(true);
      });
    });
  }, [ref]);
  return { scrollDirection };
}
