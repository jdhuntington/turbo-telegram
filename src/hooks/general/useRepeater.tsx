import { useEffect } from "react";
import { INCREMENT_REPEAT_MS, INCREMENT_DELAY_MS } from "./useSpinButtonState";
export const useRepeater = (data, callback) => {
  useEffect(() => {
    let timeoutId = 0;
    let intervalId = 0;
    if (data) {
      callback(data);
      timeoutId = setTimeout(() => {
        intervalId = setInterval(() => {
          callback(data);
        }, INCREMENT_REPEAT_MS);
      }, INCREMENT_DELAY_MS);
    }
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [callback, data]);
};
