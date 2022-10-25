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

type RangeSliderFilterProps = {
  minValue: number;
  maxValue: number;
  queryParamName: string;
  name: string;
  step?: number;
};

const RangeSliderFilter = ({
  minValue,
  maxValue,
  name,
  queryParamName,
  step = 1,
}: RangeSliderFilterProps) => {
  const router = useRouter();
  const routerValue = (router.query[queryParamName] as string[]) || [];
  const [sliderValue, setSliderValue] = useState<[number, number]>([
    routerValue[0] ? parseFloat(routerValue[0]) : minValue,
    routerValue[1] ? parseFloat(routerValue[1]) : maxValue,
  ]);

  return (
    <FormControl mb="6">
      <FormLabel textTransform="uppercase" fontSize="xs" fontWeight="bold">
        {name}
      </FormLabel>
      <RangeSlider
        // eslint-disable-next-line jsx-a11y/aria-proptypes
        aria-label={["min", "max"]}
        min={Math.floor(minValue)}
        max={Math.ceil(maxValue)}
        step={step}
        defaultValue={sliderValue}
        onChange={(val) => setSliderValue([val[0], val[1]])}
        onChangeEnd={(val) => {
          router.query[queryParamName] = [val[0].toString(), val[1].toString()];
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

export default RangeSliderFilter;
