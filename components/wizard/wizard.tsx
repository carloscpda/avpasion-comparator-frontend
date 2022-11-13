import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";
import { IoMdFootball } from "react-icons/io";
import {
  IoColorWandOutline,
  IoGameControllerOutline,
  IoPeopleOutline,
  IoTicketOutline,
} from "react-icons/io5";
import parseCurrency from "../../helpers/parse-currency";
import RadioIcon from "./radio-icon";
import WizardStep from "./step";

const topics = [
  {
    name: "General",
    value: "general",
    icon: IoPeopleOutline,
  },
  {
    name: "Cine y series",
    value: "cine",
    icon: IoTicketOutline,
  },
  {
    name: "Deportes",
    value: "sports",
    icon: IoMdFootball,
  },
  {
    name: "Videojuegos",
    value: "games",
    icon: IoGameControllerOutline,
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

const distanceScreenSizeMap = {
  "1.3": "1",
  "1.4": "1",
  "1.5": "1",
  "1.6": "1",
  "1.7": "1",
  "1.8": "1",
  "1.9": "1",
  "2": "2",
  "2.1": "2",
  "2.2": "2",
  "2.3": "2",
  "2.4": "3",
  "2.5": "3",
  "2.6": "3",
  "2.7": "3",
  "2.8": "3",
  "2.9": "4",
  "3": "4",
  "3.1": "4",
  "3.2": "4",
  "3.3": "5",
  "3.4": "5",
  "3.5": "5",
  "3.6": "5",
  "3.7": "5",
  "3.8": "5",
  "3.9": "5",
  "4": "5",
  "4.1": "5",
  "4.2": "5",
};

const imageTechnologies = [
  {
    name: "Indiferente",
    value: "0",
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

const defaultTopic = "general";
const defaultBudget = 1200;
const defaultDistance = 2.5;
const defaultImageTechnology = "0";

const Wizard = () => {
  const router = useRouter();
  const [isSearching, setIsSearching] = useState(false);
  const [topic, setTopic] =
    useState<typeof topics[number]["value"]>(defaultTopic);
  const [budget, setBudget] = useState(defaultBudget);
  const [distance, setDistance] = useState(defaultDistance);
  const [imageTechnology, setImageTechnology] = useState(
    defaultImageTechnology
  );

  const { getRootProps: getTopicRootProps, getRadioProps: getTopicRadioProps } =
    useRadioGroup({
      name: "topic",
      defaultValue: defaultTopic,
      onChange: setTopic,
    });

  const handleFindTv: FormEventHandler = () => {
    setIsSearching(true);
    if (parseInt(imageTechnology, 10)) {
      router.query["image-technology"] = imageTechnology;
    }

    if (budget !== 4000) {
      router.query.price = ["0", budget.toString()];
    }

    router.query["screen-size"] =
      distanceScreenSizeMap[
        distance.toString() as keyof typeof distanceScreenSizeMap
      ];

    router.query.topic = topic;

    router.pathname = "/mejores-televisores";

    router.push(router);
  };

  return (
    <form onSubmit={handleFindTv}>
      <Grid
        mt={{ base: "2", md: "8" }}
        gap="8"
        bg="gray.50"
        p={{ base: "2", md: "4" }}
        borderRadius="8"
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          lg: "repeat(2, minmax(0, 1fr))",
        }}
      >
        <WizardStep step={1} title="¿Para que usarás el TV principalmente?">
          <Grid
            gridTemplateColumns="repeat(2, minmax(0, 1fr))"
            gap="2"
            alignItems="flex-start"
            {...getTopicRootProps()}
          >
            {topics.map((topic) => {
              const radio = getTopicRadioProps({ value: topic.value });
              return (
                <RadioIcon
                  key={topic.name}
                  title={topic.name}
                  icon={topic.icon}
                  {...radio}
                />
              );
            })}
          </Grid>
        </WizardStep>
        <WizardStep step={2} title=" ¿Cuál es tu presupuesto?">
          <FormControl>
            <Slider
              aria-label="slider-budget"
              min={500}
              max={4000}
              step={250}
              defaultValue={defaultBudget}
              onChange={setBudget}
              mt="6"
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
          </FormControl>
        </WizardStep>
        <WizardStep step={3} title="¿Desde que distancia verás la TV?">
          <FormControl>
            <Slider
              aria-label="distance"
              defaultValue={defaultDistance}
              min={1.3}
              max={4.2}
              step={0.1}
              onChange={setDistance}
              mt="6"
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
          </FormControl>
        </WizardStep>
        <WizardStep step={4} title="¿Qué tecnología buscas en tu TV?">
          <FormControl>
            <RadioGroup
              defaultValue={defaultImageTechnology}
              onChange={setImageTechnology}
            >
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
          </FormControl>
        </WizardStep>
        <Button
          width="min-content"
          gridColumn={{ lg: "2" }}
          justifySelf="flex-end"
          bg="red.700"
          _hover={{
            bg: "red.800",
          }}
          onClick={handleFindTv}
          rightIcon={<IoColorWandOutline />}
          isLoading={isSearching}
        >
          Encontrar
        </Button>
      </Grid>
    </form>
  );
};

export default Wizard;
