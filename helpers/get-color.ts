const colors = [
  "#00B500",
  "#2BBE00",
  "#33C000",
  "#55C800",
  "#66CB00",
  "#80D100",
  "#99D700",
  "#AADA00",
  "#CCE200",
  "#D5E400",
  "#FFED00",
  "#FFC600",
  "#FFBE00",
  "#FF9E00",
  "#FF8E00",
  "#FF7700",
  "#FF5F00",
  "#FF4F00",
  "#FF2F00",
  "#FF2800",
  "#FF0000",
];

const getColor = (score: number) => {
  const position = 20 - Math.floor(score * 2);
  return colors[position];
};

export default getColor;
