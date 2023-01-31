import { type Dispatch, type SetStateAction } from 'react';
export type TIntersectionObserverCallback = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;
type TUseIntersect<T> = [T, Dispatch<SetStateAction<T>>];
declare const useIntersect: <T extends HTMLElement>(onIntersect: (...props: unknown[]) => void | Promise<unknown>, option?: IntersectionObserverInit) => TUseIntersect<T>;
export default useIntersect;
