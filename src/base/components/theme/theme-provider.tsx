import * as React from "react";
import { ThemeProvider } from "styled-components";
export const ThemeContext = React.createContext({});
interface Props {
  children: any;
  theme: {};
}
export const ThemeProviderAlt = (p: Props) => (
  <ThemeContext.Provider value={p.theme}>{p.children}</ThemeContext.Provider>
);

export { ThemeProvider }; // TODO remove this
