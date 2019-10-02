import * as React from "react";
import { getIcon } from "office-ui-fabric-react";
import cx from 'classnames';

export const Icon = (props: any) => {
  const { as: C = "i", name, ...rest } = props;
  const icon = getIcon(name) || { subset: {}, code: "" };

  return (
    <C {...rest} className={cx((icon.subset as any).className, props.className)}>
      {icon.code}
    </C>
  );
};
Icon.toProps = (input: any) => {
  return typeof input === "string" ? { name: input } : input;
};

export const createIcon = (name: any) => {
  const NewIcon = (p: any) => <Icon {...p} name={name} />;

  NewIcon.displayName = `Icon (${name})`;

  return NewIcon;
};
