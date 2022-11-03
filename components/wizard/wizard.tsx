import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Heading,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import parseCurrency from "../../helpers/parse-currency";
import WizardStep from "./step";

const topics = [
  {
    name: "General",
    value: "general",
  },
  {
    name: "Cine y series",
    value: "cine",
  },
  {
    name: "Deportes",
    value: "sports",
  },
];

const distances = [
  {
    name: "1.5m",
    value: 1.5,
  },
  {
    name: "2m",
    value: 2,
  },
  {
    name: "2.5m",
    value: 2.5,
  },
  {
    name: "3m",
    value: 3,
  },
  {
    name: "3.5m",
    value: 3.5,
  },
  {
    name: "4m",
    value: 4,
  },
];

const imageTechnologies = [
  {
    name: "Indiferente",
    value: "-",
  },
  {
    name: "OLED",
    value: "1",
  },
  {
    name: "LCD",
    value: "2",
  },
];

const defaultBudget = 1200;
const defaultDistance = 2.5;

const Wizard = () => {
  const [budget, setBudget] = useState(defaultBudget);
  const [distance, setDistance] = useState(defaultDistance);

  return (
    <FormControl as="fieldset">
      <Grid
        mt="8"
        gap="4"
        bg="gray.50"
        p="4"
        borderRadius="8"
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          md: "repeat(2, minmax(0, 1fr))",
        }}
      >
        <WizardStep step={1} title="¿Para que usarás el TV principalmente?">
          <RadioGroup defaultValue="cine" mt="4">
            <VStack alignItems="flex-start">
              {topics.map((topic) => (
                <Radio
                  key={topic.value}
                  value={topic.value}
                  _checked={{
                    borderWidth: "5px",
                    color: "white",
                    borderColor: "red.700",
                  }}
                >
                  {topic.name}
                </Radio>
              ))}
            </VStack>
          </RadioGroup>
        </WizardStep>
        <WizardStep step={2} title=" ¿Cuál es tu presupuesto?">
          <Slider
            aria-label="slider-budget"
            min={600}
            max={4000}
            defaultValue={defaultBudget}
            onChange={setBudget}
          >
            <SliderMark
              value={budget}
              fontSize="xs"
              bg="gray.100"
              mt={budget === 4000 ? "-12" : "-8"}
              ml={budget === 4000 ? "-5" : "-8"}
              px="1"
              borderRadius={4}
            >
              {budget === 4000 ? "Sin límite" : parseCurrency(budget)}
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb bg="red.700" />
          </Slider>
        </WizardStep>
        <WizardStep step={3} title="¿Desde que distancia verás la TV?">
          <Slider
            aria-label="distance"
            defaultValue={defaultDistance}
            min={1.3}
            max={4.2}
            step={0.1}
            onChange={setDistance}
          >
            <SliderMark
              value={distance}
              fontSize="xs"
              bg="gray.100"
              mt="-8"
              ml="-3"
              px="1"
              borderRadius={4}
            >
              {`${distance}m`}
            </SliderMark>
            {distances.map((distance) => (
              <SliderMark
                key={distance.value}
                value={distance.value}
                fontSize="xs"
                mt="4"
                ml="-3"
                px="1"
              >
                {distance.name}
              </SliderMark>
            ))}
            {distances.map((distance) => (
              <SliderMark
                key={distance.value}
                value={distance.value}
                fontSize="xs"
                bg="gray.600"
                mt="-1.5"
                ml="-1.5"
                width={3}
                height={3}
                borderRadius="full"
                zIndex={2}
              />
            ))}
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb bg="red.700" zIndex={3} />
          </Slider>
          <FormHelperText mt="16">
            Distancia en metros entre el sofá y el televisor
          </FormHelperText>
        </WizardStep>
        <WizardStep step={4} title="¿Qué tecnología buscas en tu TV?">
          <RadioGroup defaultValue="1" mt="4">
            <VStack alignItems="flex-start">
              {imageTechnologies.map((tech) => (
                <Radio
                  key={tech.value}
                  value={tech.value}
                  _checked={{
                    borderWidth: "5px",
                    color: "white",
                    borderColor: "red.700",
                  }}
                >
                  {tech.name}
                </Radio>
              ))}
            </VStack>
          </RadioGroup>
        </WizardStep>
        <Button
          width="min-content"
          gridColumn={{ md: "2" }}
          justifySelf="flex-end"
          bg="red.700"
          _hover={{
            bg: "red.800",
          }}
        >
          Encontrar
        </Button>
      </Grid>
    </FormControl>
  );
};

export default Wizard;
