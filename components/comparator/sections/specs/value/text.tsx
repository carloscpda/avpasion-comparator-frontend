export type TextValueProps = {
  value?: string | null;
};

const TextValue = ({ value }: TextValueProps) => {
  return <>{value || "-"}</>;
};

export default TextValue;
