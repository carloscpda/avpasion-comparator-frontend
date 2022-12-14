import { HStack, Image, Tag, TagLabel, Text, WrapItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import parseCurrency from "../../../helpers/parse-currency";
import { getPicture } from "../../../models/tv";
import { useTvs } from "../tvs-provider";

type SerieTvProps = {
  slug?: string | null;
  name?: string | null;
  screenSize?: number | null;
  resolution?: string | null;
  price?: number;
};

const SerieTv = ({
  name,
  slug,
  resolution,
  screenSize,
  price,
}: SerieTvProps) => {
  const router = useRouter();
  const tv = useTvs().tvs[0];

  const details = [];

  if (screenSize) {
    details.push(`${screenSize}"`);
  }

  if (resolution) {
    details.push(resolution);
  }

  return (
    <WrapItem
      borderRadius="12"
      px="4"
      py="2"
      border="1px"
      borderColor={tv.slug === slug ? "gray.300" : "gray.100"}
      minW="44"
      display="inline"
      transition="0.3s ease"
      cursor="pointer"
      _hover={{
        transform: "scale(1.02)",
      }}
      onClick={() => router.push(`/televisores/${slug}`)}
    >
      <HStack>
        <Image
          src={getPicture(tv)}
          alt={name || ""}
          objectFit="contain"
          width="40px"
          height="30px"
        />
        <Text>{name}</Text>
      </HStack>
      <HStack mt="2">
        <Tag color="black" variant="outline">
          <TagLabel>{`${screenSize}"`}</TagLabel>
        </Tag>
        <Tag color="gray" variant="outline">
          <TagLabel>{resolution}</TagLabel>
        </Tag>
        {!!price && (
          <Tag color="gray" variant="outline">
            <TagLabel>{parseCurrency(price)}</TagLabel>
          </Tag>
        )}
      </HStack>
    </WrapItem>
  );
};

export default SerieTv;
