import React from "react";
import { useTv } from "../../tv-provider";
import Specs, { SpecsProps } from "../specs/specs";

const SpeakersSection = () => {
  const { sound } = useTv();

  const specs: SpecsProps["specs"] = [];

  if (sound?.speakers) {
    specs.push({
      type: "cable-connection",
      label: "Altavoces",
      value: sound.speakers.map((speaker) => ({
        name: `${speaker?.power}W`,
        quantity: speaker?.quantity || 1,
      })),
    });
  }

  if (sound?.subwoofers) {
    specs.push({
      type: "cable-connection",
      label: "Subwoofers",
      value: sound.subwoofers.map((speaker) => ({
        name: `${speaker?.power}W`,
        quantity: speaker?.quantity || 1,
      })),
    });
  }

  if (sound?.power) {
    specs.push({
      type: "row",
      label: "Potencia",
      value: {
        type: "text",
        value: `${sound?.power}W`,
      },
    });
  }

  if (sound?.outputChannels) {
    specs.push({
      type: "row",
      label: "Canales de salida",
      value: {
        type: "text",
        value: sound?.outputChannels,
      },
    });
  }

  return <Specs title="Altavoces" specs={specs} />;
};

export default SpeakersSection;
