export type BoolValueProps = {
  value: boolean;
};

const BoolValue = ({ value }: BoolValueProps) => {
  return <> {value ? "Si" : "No"}</>;
};

export default BoolValue;
