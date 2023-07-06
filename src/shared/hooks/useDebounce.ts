import { useEffect, useState } from 'react';

const DEFAULT_DELAY = 300;

export function useDebounce<T>(value: T, delay: number = DEFAULT_DELAY): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
