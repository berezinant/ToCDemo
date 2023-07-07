import { RefObject, useEffect, useRef } from 'react';

const DEFAULT_DELAY = 300;

export function useScrollIntoView(
  triggered: boolean,
  delay: number = DEFAULT_DELAY
): RefObject<HTMLDivElement | HTMLAnchorElement> {
  const ref = useRef<HTMLDivElement | HTMLAnchorElement>(null);

  useEffect(() => {
    if (triggered && ref.current) {
      const timeout = setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, []);

  return ref;
}
