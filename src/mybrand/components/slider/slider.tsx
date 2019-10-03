import * as React from "react";

import { composed } from "../../../lib/composed";
import { SliderProps } from "../../../base/components/slider/props";
import { Slider as BaseSlider } from "../../../base/components/slider/slider";

export const Slider = composed<SliderProps>(BaseSlider as any, {
  name: "Slider",
  slots: {
    thumb: (p: any) => {
      const Thumb = (BaseSlider as any).thumb;
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
