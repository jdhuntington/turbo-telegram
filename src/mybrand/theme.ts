import { SliderTheme } from "./components/slider/theme";

export const theme = {
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
