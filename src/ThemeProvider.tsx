import * as React from "react";
export const ThemeContext = React.createContext({});
export const ThemeProvider = (p: any) => (
  <ThemeContext.Provider value={p.theme}>{p.children}</ThemeContext.Provider>
);
