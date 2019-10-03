import { composed } from "../../../lib/composed";
import { SliderProps } from "../../../base/components/slider/props";
import { Slider as BaseSlider } from "../../../base/components/slider/slider";
import { Theme } from "./../../../lib/theme";
import { theme as myBrandTheme } from "./../../theme";

interface Tokens {
  trackBeforeColor: string;
}

const tokens = (theme: Theme): Tokens => {
  return {
    trackBeforeColor: theme.brandColor
  };
};

const styles = (theme: Theme, tokens: Tokens) => {
  return {
    root: {
      position: "relative",
      height: "28px",

      "&:focus": {
        outline: "none"
      },

      "&::before": {
        content: "",
        position: "absolute",
        width: "100%",
        height: "4px",
        backgroundColor: "rgb(96, 94, 92)",
        top: "50%",
        transform: "translateY(-50%)"
      }
    },
    track: {
      position: "absolute",
      left: "8px",
      right: "8px",
      height: "100%"
    },

    selectedTrack: {
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      height: "4px",
      backgroundColor: "blue"
    },
    thumb: {
      position: "absolute",
      boxSizing: "border-box",
      height: "16px",
      width: "16px",
      borderRadius: "16px",
      top: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      border: "2px solid rgb(96, 94, 92)"
    }
  };
};

export const Slider = composed<SliderProps>(BaseSlider as any, {
  name: "Slider",
  styles,
  tokens,
  defaultTheme: myBrandTheme
});
