import { useRef, useEffect } from "react";

export function useDebounce<T extends string[]>(
  fn: (...args: T) => void,
  delay: number
) {
  const timeoutRef = useRef<number | undefined>();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function debounceFn(...params: T) {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      fn(...params);
    }, delay);
  }

  return debounceFn;
}
