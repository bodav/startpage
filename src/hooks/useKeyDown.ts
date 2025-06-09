import { useEffect } from "react";

export const useKeyDown = (callback: (e: KeyboardEvent) => void) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      callback(event);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  });
};

export default useKeyDown;
