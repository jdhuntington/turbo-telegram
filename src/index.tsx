import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import { default as styled, ThemeProvider } from "styled-components";
import {  ExSlider } from "./Slider";
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
    ...SliderTheme,

    SpinButton: {
      slots: {
        prefix: styled.div`
          display: flex;
          align-items: center;
          align-self: stretch;
          background-color: #eee;
          padding: 0 8px;
          font-size: 12px;
        `
      }
    }
  }
};

const Spacer = styled.div`
  margin: 10px;
  background: #ccc;
  height: 400px;
`;

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
          onChange={(ev, val) => setValue(val)}
        />
        <Spacer style={{ height: value }} />
      </div>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
