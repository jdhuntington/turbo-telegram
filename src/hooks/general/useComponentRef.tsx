import { useEffect } from "react";
export const useComponentRef = (ref, api) => {
  useEffect(() => {
    if (ref) {
      ref.current = api;
    }
    return () => {
      if (ref) {
        ref.current = null;
      }
    };
  }, [ref]);
};
