declare const useThrottleCallback: <T extends unknown[]>(cb: (...args: T) => void, delay?: number) => DebouncedFunc<(...args: T) => void>;
export default useThrottleCallback;
