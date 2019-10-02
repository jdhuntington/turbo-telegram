import { useState, useCallback } from "react";
export const useTrackedFocus = () => {
  const [isFocused, setFocus] = useState(false);
  const onFocus = useCallback(() => setFocus(true), []);
  const onBlur = useCallback(() => setFocus(false), []);
  return {
    isFocused,
    onFocus,
    onBlur
  };
};
