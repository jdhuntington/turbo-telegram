import "./styles.css";

import * as React from "react";
import { render } from "react-dom";

import { Slider } from "./base/components/slider/slider";
import { Slider as MyBrandSlider } from "./mybrand/components/slider/slider";
import { ThemeContext } from "./lib/theme-context";

const simpleTheme = {
  brandColor: "#fac"
};

const App = () => {
  const [value, setValue] = React.useState(10);
  const setValueFromEvent = React.useCallback(
    (ev: any, val: any) => setValue(val),
    [setValue]
  );

  const renderControlExamples = (title: string) => {
    return (
      <div>
        <h2>{title}</h2>
        <div className="control-examples">
          <div className="control-example">
            <h3>MyBrandSlider</h3>
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
            <h3>Slider (Base)</h3>
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
    );
  };

  return (
    <div className="App">
      <p>Value is {value}</p>
      {renderControlExamples("Unthemed (see baked-in theme)")}
      <ThemeContext.Provider value={simpleTheme}>
        {renderControlExamples("Simple Theme")}
      </ThemeContext.Provider>
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
