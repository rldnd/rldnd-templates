import { useDeferredValue, useLayoutEffect, useRef } from 'react';

type DebugConcurrentOption = 'FirstRender' | 'LowPriority' | 'HighPriority';
type DebugConcurrentPoint = 'Start' | 'End';

type UseDebugConcurrentArgs = {
  [K in DebugConcurrentOption as `on${K}${DebugConcurrentPoint}`]: (() => void) | undefined;
};

const useDebugConcurrent = ({
  onFirstRenderStart,
  onFirstRenderEnd,
  onLowPriorityStart,
  onLowPriorityEnd,
  onHighPriorityStart,
  onHighPriorityEnd,
}: UseDebugConcurrentArgs) => {
  const probe = {};
  const deferredProbe = useDeferredValue(probe);
  const isFirstRenderRef = useRef(true);
  const isFirstRender = isFirstRenderRef.current;

  const isLowPriority = probe === deferredProbe;

  if (isFirstRender) {
    isFirstRenderRef.current = false;
    onFirstRenderStart?.();
  } else {
    if (isLowPriority) {
      onLowPriorityStart?.();
    } else {
      onHighPriorityStart?.();
    }
  }

  useLayoutEffect(() => {
    if (isFirstRender) {
      onFirstRenderEnd?.();
    } else {
      if (isLowPriority) {
        onLowPriorityEnd?.();
      } else {
        onHighPriorityEnd?.();
      }
    }
  });
};

export default useDebugConcurrent;
