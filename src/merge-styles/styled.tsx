import * as React from "react";
import { mergeStyles } from "@uifabric/merge-styles";
import { ThemeContext } from "styled-components";
import { getId } from "@uifabric/utilities";

// Use merge-styles to create atomic components

export const styled = (Component, statics?) => (styles?) => {
  const globalClassName = "css-" + getId();

  const Result = React.forwardRef<
    {},
    { as?: React.ReactType; className?: string }
  >((props, ref) => {
    const theme = React.useContext(ThemeContext);
    const { as, ...rest } = props;

    if (as) {
      Component = as;
    }

    const componentProps = {
      ...rest,
      ref,
      className: mergeStyles(
        globalClassName,
        typeof styles === "function" ? styles({ ...props, theme }) : styles,
        props.className
      )
    };

    return typeof Component === "function" && Component.tagName ? (
      Component(componentProps)
    ) : (
      <Component {...componentProps} />
    );
  });

  Result.toString = () => `.${globalClassName}`;
  Result.tagName =
    typeof Component === "string" ? Component : Component.tagName;

  Result.displayName =
    "styled (" + (Component.displayName || Component.name || Component) + ")";

  if (statics) {
    Object.assign(Result, statics);
  }

  return Result;
};
