import { useCallback, useEffect } from "react";

const useKeyDown = (handler: (e: KeyboardEvent) => void, deps: unknown[]) => {
  const keyHandler = useCallback(handler, deps);

  useEffect(() => {
    document.addEventListener("keydown", keyHandler);

    return () => {
      document.removeEventListener("keydown", keyHandler);
    };
  }, [keyHandler]);
};

export default useKeyDown;
