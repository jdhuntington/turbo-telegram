import * as React from "react";

import { composed } from "../../../lib/composed";
import { SliderProps } from "./../../../base/components/slider/props";
import { Slider } from "./../../../base/components/slider/slider";

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
