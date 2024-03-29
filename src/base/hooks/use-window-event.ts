import { useEffect } from "react";

export const useWindowEvent = (eventName: any, onEvent: any) => {
  useEffect(() => {
    if (onEvent) {
      window.addEventListener(eventName, onEvent, true);
    }

    return () => {
      if (onEvent) {
        window.removeEventListener(eventName, onEvent, true);
      }
    };
  }, [eventName, onEvent]);
};
