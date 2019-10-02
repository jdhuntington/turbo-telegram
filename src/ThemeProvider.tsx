import * as React from "react";
export const ThemeContext = React.createContext({});
interface Props {
  children: any;
  theme: {};
}
export const ThemeProvider = (p: Props) => (
  <ThemeContext.Provider value={p.theme}>{p.children}</ThemeContext.Provider>
);
