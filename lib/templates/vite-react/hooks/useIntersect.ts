import { type Dispatch, type SetStateAction, useCallback, useEffect, useState } from 'react';

export type TIntersectionObserverCallback = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;

type TUseIntersect<T> = [T, Dispatch<SetStateAction<T>>];

const useIntersect = <T extends HTMLElement>(
  onIntersect: (...props: unknown[]) => void | Promise<unknown>,
  option?: IntersectionObserverInit,
): TUseIntersect<T> => {
  const [ref, setRef] = useState<T | null>(null);

  const checkIntersect: IntersectionObserverCallback = useCallback(
    async ([entry]) => {
      if (!entry.isIntersecting) {
        return;
      }
      await onIntersect();
    },
    [onIntersect],
  );

  useEffect(() => {
    if (!ref) {
      return () => {};
    }

    const observer = new IntersectionObserver(checkIntersect, option);
    observer.observe(ref);

    return () => observer && observer.disconnect();
  }, [ref, option, checkIntersect]);

  return [ref, setRef] as TUseIntersect<T>;
};

export default useIntersect;
