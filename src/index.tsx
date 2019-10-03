import "./styles.css";

import * as React from "react";
import { render } from "react-dom";

import { Slider } from "./base/components/slider/slider";
import { ThemeProvider } from "./base/components/theme/theme-provider";
import { Slider as MyBrandSlider } from "./mybrand/components/slider/slider";
import { theme } from "./mybrand/theme";

const App = () => {
  const [value, setValue] = React.useState(10);
  const setValueFromEvent = React.useCallback(
    (ev: any, val: any) => setValue(val),
    [setValue]
  );
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <p>Value is {value}</p>
        <div className="control-examples">
          <div className="control-example">
            <MyBrandSlider
              min={0}
              max={500}
              step={1}
              snapToStep={false}
              value={value}
              onChange={setValueFromEvent}
            />
          </div>
          <div className="control-example">
            <Slider
              min={0}
              max={500}
              step={1}
              snapToStep={false}
              value={value}
              onChange={setValueFromEvent}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
