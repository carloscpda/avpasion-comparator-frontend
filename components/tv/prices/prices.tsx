import { Box, Flex, IconButton, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MarketplaceTv } from "../../../models/marketplace-tv.tsx";
import SectionTitle from "../../section-title";
import MarketplacePrice from "./marketplace-price";

const PRICES_TO_SHOW = 4;

const PricesSection = ({ tvId }: { tvId: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<MarketplaceTv[]>([]);
  const [expanded, setExpanded] = useState(false);
  const showExpandButton = !expanded && data.length > PRICES_TO_SHOW;

  const list = useMemo(() => {
    return expanded ? data : data.slice(0, PRICES_TO_SHOW);
  }, [data, expanded]);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/marketplaces/${tvId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tvId]);

  const updateDatetime = useMemo(() => {
    if (data?.length) {
      const datetime = new Date(data[0].createdAt);
      return datetime.toLocaleString("es-ES", {
        dateStyle: "medium",
        timeStyle: "short",
      });
    }
  }, [data]);

  return (
    <Box mb="10">
      {!!data?.length && (
        <>
          <SectionTitle title="Precios" />
          <Flex mb="2" gap={4} flexDirection="column">
            {list.map((mt, index) => (
              <MarketplacePrice
                key={mt.marketplace?.data?.attributes?.name}
                position={index + 1}
                {...mt}
              />
            ))}
          </Flex>
          {showExpandButton && (
            <Flex justifyContent="center" onClick={() => setExpanded(true)}>
              <IconButton
                aria-label="Search database"
                variant="ghost"
                fontSize="2xl"
                justifySelf="center"
                alignSelf="center"
                icon={<AiOutlinePlusCircle />}
              />
            </Flex>
          )}
          <Box display="flex" justifyContent="flex-end" mt="4">
            <Text
              as="i"
              color="gray.700"
              fontSize="sm"
              textAlign="right"
            >{`Precios actualizados el ${updateDatetime}`}</Text>
          </Box>
        </>
      )}
      {loading && <Spinner />}
    </Box>
  );
};

export default PricesSection;
