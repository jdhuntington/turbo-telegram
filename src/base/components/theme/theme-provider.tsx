import * as React from "react";
import { ThemeProvider, ThemeContext } from "styled-components";
export const MyThemeContext = React.createContext({});
interface Props {
  children: any;
  theme: {};
}
export const ThemeProviderAlt = (p: Props) => (
  <MyThemeContext.Provider value={p.theme}>
    {p.children}
  </MyThemeContext.Provider>
);

export { ThemeProvider, ThemeContext }; // TODO remove this
