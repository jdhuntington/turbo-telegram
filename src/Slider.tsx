import * as React from "react";

import { composed } from "./composed";
import { SliderProps, useSliderSlots, useSliderState } from "./hooks/useSlider";

// Focus of the view is provide order and conditionals for the slots, and to mix props into the right places.
const view = ({ Slots, slotProps }: any) => {
  return (
    <Slots.root {...slotProps.root}>
      <Slots.selectedTrack {...slotProps.selectedTrack} />
      <Slots.track {...slotProps.track}>
        <Slots.thumb {...slotProps.thumb} />
      </Slots.track>
    </Slots.root>
  );
};

export const Slider = composed<SliderProps>({
  name: "Slider",
  slots: {
    root: "div",
    selectedTrack: "div",
    track: "div",
    thumb: "div"
  },
  state: useSliderState,
  slotProps: useSliderSlots,
  view
} as any);

export const ExSlider = composed<SliderProps>(Slider as any, {
  name: "Slider",
  slots: {
    thumb: (p: any) => {
      const Thumb = (Slider as any).thumb;
      return (
        <div {...p}>
          <Thumb />
          <div>child1</div>
          <div>child2</div>
        </div>
      );
    }
  }
});
