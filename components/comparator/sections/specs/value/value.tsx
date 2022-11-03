import BoolValue, { BoolValueProps } from "./bool";
import ColorValue, { ColorValueProps } from "./color";
import EnergyEfficiencyValue, {
  EnergyEfficiencyValueProps,
} from "./energy-efficiency";
import QuantityValue, { QuantityValueProps } from "./quantity";
import TextValue, { TextValueProps } from "./text";

export type SpecValueProps =
  | ({ type: "text" } & TextValueProps)
  | ({ type: "bool" } & BoolValueProps)
  | ({ type: "color" } & ColorValueProps)
  | ({ type: "energy-efficiency" } & EnergyEfficiencyValueProps)
  | ({ type: "quantity" } & QuantityValueProps);

const SpecValue = (props: SpecValueProps) => {
  if (props.type === "text") {
    const { type, ...other } = props;
    return <TextValue {...other} />;
  }

  if (props.type === "bool") {
    const { type, ...other } = props;
    return <BoolValue {...other} />;
  }

  if (props.type === "color") {
    const { type, ...other } = props;
    return <ColorValue {...other} />;
  }

  if (props.type === "energy-efficiency") {
    const { type, ...other } = props;
    return <EnergyEfficiencyValue {...other} />;
  }

  if (props.type === "quantity") {
    const { type, ...other } = props;
    return <QuantityValue {...other} />;
  }

  return null;
};

export default SpecValue;
