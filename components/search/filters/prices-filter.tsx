import {
  FormControl,
  FormLabel,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

type PriceFilterProps = {
  minPrice: number;
  maxPrice: number;
};

const PriceFilter = ({ minPrice, maxPrice }: PriceFilterProps) => {
  const router = useRouter();

  const [sliderValue, setSliderValue] = useState<[number, number]>([
    router.query["min-price"]
      ? parseFloat(router.query["min-price"] as string)
      : minPrice,
    router.query["max-price"]
      ? parseFloat(router.query["max-price"] as string)
      : maxPrice,
  ]);

  return (
    <FormControl>
      <FormLabel textTransform="uppercase" fontSize="xs" fontWeight="bold">
        Precio
      </FormLabel>
      <RangeSlider
        // eslint-disable-next-line jsx-a11y/aria-proptypes
        aria-label={["min", "max"]}
        min={Math.floor(minPrice)}
        max={Math.ceil(maxPrice)}
        step={1}
        defaultValue={sliderValue}
        onChange={(val) => setSliderValue([val[0], val[1]])}
        onChangeEnd={(val) => {
          router.query["min-price"] = val[0].toString();
          router.query["max-price"] = val[1].toString();
          router.query.page = "1";
          router.replace(router);
        }}
      >
        <RangeSliderMark
          value={sliderValue[0]}
          fontSize="xs"
          bg="gray.100"
          mt="4"
          ml="-5"
          px="1"
          borderRadius={4}
        >
          {sliderValue[0]}
        </RangeSliderMark>
        <RangeSliderMark
          value={sliderValue[1]}
          fontSize="xs"
          bg="gray.100"
          mt="4"
          ml="-5"
          px="1"
          borderRadius={4}
        >
          {sliderValue[1]}
        </RangeSliderMark>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </FormControl>
  );
};

export default PriceFilter;
