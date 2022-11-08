import { Box, Grid, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MarketplaceTv } from "../../../models/marketplace-tv.tsx";
import MarketplacePrice from "./marketplace-price";

const PricesReduced = ({ tvId }: { tvId: string }) => {
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

  return (
    <Box mb="10">
      {loading && <Spinner />}
      <Grid gap={4}>
        {data.slice(0, 3).map((mt, index) => (
          <MarketplacePrice
            key={mt.marketplace?.data?.attributes?.name}
            position={index + 1}
            {...mt}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default PricesReduced;
