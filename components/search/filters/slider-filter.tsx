import {
  FormControl,
  FormLabel,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

type SliderFilterProps = {
  minValue: number;
  maxValue: number;
  queryParamName: string;
  name: string;
  step?: number;
};

const SliderFilter = ({
  minValue,
  maxValue,
  name,
  queryParamName,
  step = 1,
}: SliderFilterProps) => {
  const router = useRouter();
  const routerValue = (router.query[queryParamName] as string) || undefined;
  const [sliderValue, setSliderValue] = useState<number>(
    routerValue ? parseFloat(routerValue) : minValue
  );

  return (
    <FormControl mb="6">
      <FormLabel textTransform="uppercase" fontSize="xs" fontWeight="bold">
        {name}
      </FormLabel>
      <Slider
        // eslint-disable-next-line jsx-a11y/aria-proptypes
        aria-label="min"
        min={Math.floor(minValue)}
        max={Math.ceil(maxValue)}
        step={step}
        defaultValue={sliderValue}
        onChange={setSliderValue}
        onChangeEnd={(val) => {
          router.query[queryParamName] = val.toString();
          router.query.page = "1";
          router.replace(router);
        }}
      >
        <SliderMark
          value={sliderValue}
          fontSize="xs"
          bg="gray.100"
          mt="4"
          ml="-5"
          px="1"
          borderRadius={4}
        >
          {sliderValue}
        </SliderMark>
        <SliderTrack bgGradient="linear(to-r, #FF0000, #FFED00, #00B500)">
          <SliderFilledTrack bg="gray.200" />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </FormControl>
  );
};

export default SliderFilter;
