import "./styles.css";

import * as React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "./base/components/theme/theme-provider";

import { ExSlider, Slider } from "./Slider";
import { SliderTheme } from "./SliderTheme";

const theme = {
  colors: {
    inputBackground: "red"
  },

  typography: {
    fontfaces: {
      segoe: ""
    },
    sizes: {
      lg: 24,
      md: 12,
      sm: 10
    },
    variants: {
      body: {}
    }
  },
  effects: {
    inputBorderRadius: "2px"
  },
  components: {
    ...SliderTheme
  }
};

const App = () => {
  const [value, setValue] = React.useState(10);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <p>Value is {value}</p>
        <ExSlider
          min={0}
          max={500}
          step={1}
          snapToStep={false}
          value={value}
          onChange={(ev: any, val: any) => setValue(val)}
        />

        <Slider
          min={0}
          max={500}
          step={1}
          snapToStep={false}
          value={value}
          onChange={(ev: any, val: any) => setValue(val)}
        />
      </div>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
