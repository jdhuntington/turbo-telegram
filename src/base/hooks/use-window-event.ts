import { useEffect } from "react";

export const useWindowEvent = (eventName: any, onEvent: any) => {
  useEffect(() => {
    if (onEvent) {
      console.log("Adding event listener to ", onEvent)
      window.addEventListener(eventName, onEvent, true);
    }

    return () => {
      if (onEvent) {
        console.log("Removing event listener from ", onEvent)
        window.removeEventListener(eventName, onEvent, true);
      }
    };
  }, [eventName, onEvent]);
};
