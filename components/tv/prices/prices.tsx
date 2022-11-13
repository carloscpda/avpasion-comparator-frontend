import { Box, Grid, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { MarketplaceTv } from "../../../models/marketplace-tv.tsx";
import SectionTitle from "../../section-title";
import MarketplacePrice from "./marketplace-price";

const PricesSection = ({ tvId }: { tvId: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<MarketplaceTv[]>([]);

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
          <Grid
            mb="2"
            gap={4}
            gridTemplateColumns={{
              base: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            }}
          >
            {data.map((mt, index) => (
              <MarketplacePrice
                key={mt.marketplace?.data?.attributes?.name}
                position={index + 1}
                {...mt}
              />
            ))}
          </Grid>
          <Box display="flex" justifyContent="flex-end">
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
