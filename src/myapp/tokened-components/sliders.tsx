import { Slider } from "./../../mybrand/components/slider/slider";
import { composed } from "./../../lib/composed";
import { SliderProps } from "./../../base/components/slider/props";

export const MostlyRedSlider = composed<SliderProps>(Slider as any, {
  name: "MostlyRedSlider"
});

export const ThumbOverridenSlider = composed<SliderProps>(Slider as any, {
  name: "ThumbOverridenSlider"
});
