import React from "react";
import TextValue, { TextValueProps } from "./text";
import BoolValue, { BoolValueProps } from "./bool";
import ColorValue, { ColorValueProps } from "./color";
import EnergyEfficiencyValue, {
  EnergyEfficiencyValueProps,
} from "./energy-efficiency";

export type ValueProps =
  | ({ type: "text" } & TextValueProps)
  | ({ type: "bool" } & BoolValueProps)
  | ({ type: "color" } & ColorValueProps)
  | ({ type: "energy-efficiency" } & EnergyEfficiencyValueProps);

const Value = (props: ValueProps) => {
  if (props.type === "text") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, ...text } = props;
    return <TextValue {...text} />;
  }

  if (props.type === "bool") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, ...text } = props;
    return <BoolValue {...text} />;
  }

  if (props.type === "color") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, ...text } = props;
    return <ColorValue {...text} />;
  }

  if (props.type === "energy-efficiency") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, ...text } = props;
    return <EnergyEfficiencyValue {...text} />;
  }

  return null;
};

export default Value;
