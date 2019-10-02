import * as React from "react";
import { ThemeContext } from "styled-components";

/**
 * Composed allows you to create composed components, which
 * have configurable, themable state, view, and slots.
 *
 * Composed components can be recomposed.
 */
export const composed = <TProps = {}>(baseComponent: React.SFC, options?: any) => {
  if (typeof baseComponent === "function" && (baseComponent as any).__options) {
    const baseOptions = (baseComponent as any).__options;

    options = {
      ...baseOptions,
      ...options,
      slots: {
        ...baseOptions.slots,
        ...options.slots
      }
    };
  } else {
    options = baseComponent;
  }

  const Component = (userProps: TProps) => {
    const theme = React.useContext<any>(ThemeContext);
    let themedOptions =
      theme && theme.components && options.name
        ? theme.components[options.name]
        : undefined;
    let mergedOptions = themedOptions
      ? {
          ...options,
          ...themedOptions,
          slots: {
            ...options.slots,
            ...themedOptions.slots
          }
        }
      : options;
    let { slots, state, slotProps, view } = mergedOptions;
    let resolvedSlotProps = _getSlotProps(userProps, slots, state, slotProps);

    return view({
      userProps,
      Slots: slots,
      slotProps: resolvedSlotProps,
      theme
    });
  };

  for (let slotName in options.slots) {
    (Component as any)[slotName] = options.slots[slotName];
  }

  Component.__options = options;
  Component.displayName = options.name || "Composed Component";

  return Component;
};

function _resolveProps(input: any, slot: any) {
  if (slot.toProps) {
    return slot.toProps(input);
  }

  if (typeof input === "object" && !React.isValidElement(input)) {
    return input;
  }

  return {
    children: input
  };
}

function _getSlotProps(userProps: any, slots: any, state: any, slotProps: any) {
  const resolvedState = state ? state(userProps, slots) : {};
  const resolvedSlotProps = slotProps
    ? typeof slotProps === "function"
      ? slotProps(userProps, resolvedState)
      : slotProps
    : {};

  return resolvedSlotProps;
}
