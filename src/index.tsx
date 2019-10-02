import "./styles.css";

import * as React from "react";
import { render } from "react-dom";

import { ExSlider, Slider } from "./base/components/slider/slider";
import { ThemeProvider } from "./base/components/theme/theme-provider";
import { theme } from "./mybrand/theme";

const App = () => {
  const [value, setValue] = React.useState(10);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <p>Value is {value}</p>
        <div className="control-examples">
          <div className="control-example">
            <ExSlider
              min={0}
              max={500}
              step={1}
              snapToStep={false}
              value={value}
              onChange={(ev: any, val: any) => setValue(val)}
            />
          </div>
          <div className="control-example">
            <Slider
              min={0}
              max={500}
              step={1}
              snapToStep={false}
              value={value}
              onChange={(ev: any, val: any) => setValue(val)}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
