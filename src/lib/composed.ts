import jss from "jss";
import * as React from "react";
import { useTheme } from "./theme-context";
import { initializeJss } from "./jss";
import { Theme } from "./theme";

const _getClasses = (theme: Theme, name: string, optionsSet: any[]) => {
  console.log({ theme, name, optionsSet });
  initializeJss();
  let tokens: any = {};
  optionsSet.forEach((options: any) => {
    if (options && options.tokens && typeof options.tokens === "function") {
      tokens = { ...tokens, ...options.tokens(theme) };
    }
  });

  let styles: any = {};
  optionsSet.forEach((options: any) => {
    if (options && options.styles && typeof options.styles === "function") {
      styles = { ...styles, ...options.styles(theme, tokens) };
    }
  });

  const sheet = jss.createStyleSheet(styles, {
    classNamePrefix: name + "-"
  });
  sheet.attach();

  return sheet.classes;
};

/**
 * Composed allows you to create composed components, which
 * have configurable, themable state, view, and slots.
 *
 * Composed components can be recomposed.
 */
export const composed = <TProps = {}>(
  baseComponent?: React.SFC,
  options?: any
) => {
  const classNamesCache = new WeakMap();
  let optionsSet = [options];
  if (baseComponent && (baseComponent as any).__optionsSet) {
    optionsSet = [...(baseComponent as any).__optionsSet, options];
  }
  const name = options.name || "(unknown)";

  baseComponent =
    (baseComponent && (baseComponent as any).__parentComponent) ||
    baseComponent;

  let mergedOptions = {};
  optionsSet.forEach(o => {
    mergedOptions = { ...mergedOptions, ...o };
  });

  const Component = (userProps: TProps) => {
    const theme: Theme = (useTheme() || options.defaultTheme)!;
    if (!theme) {
      console.warn("No theme specified, behavior undefined.");
    }

    let { slots, state, slotProps, view, name } = mergedOptions as any;
    let resolvedSlotProps = _getSlotProps(
      userProps,
      slots,
      state,
      slotProps,
      theme,
      classNamesCache,
      optionsSet,
      name
    );

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

  Component.__optionsSet = optionsSet;
  Component.displayName = options.name || "Composed Component";

  return Component;
};

function _getSlotProps(
  userProps: any,
  slots: any,
  state: any,
  slotProps: any,
  theme: Theme,
  classNamesCache: WeakMap<any, any>,
  optionsSet: any[],
  name: string
) {
  const resolvedState = state ? state(userProps, slots) : {};
  if (theme && !classNamesCache.has(theme)) {
    classNamesCache.set(theme, _getClasses(theme, name, optionsSet));
  }
  const resolvedSlotProps = slotProps
    ? typeof slotProps === "function"
      ? slotProps(userProps, resolvedState)
      : slotProps
    : {};

  return resolvedSlotProps;
}
