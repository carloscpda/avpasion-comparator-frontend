import { Grid } from "@chakra-ui/react";
import {
  getBrand,
  getFullName,
  getImageTechnology,
  getModel,
  getPicture,
  getReleaseDate,
  getResolution,
  getScreenSize,
  SearchTV,
} from "../../../models/search-tv";
import SearchTvItem from "../../search/item/search-tv-item";
import SectionTitle from "../../section-title";

const SimilarTvs = ({ name, tvs }: { name: string; tvs: SearchTV[] }) => {
  return (
    <>
      <SectionTitle mt="16" title={`Televisiones parecidas a la ${name}`} />
      <Grid
        flex="1"
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        }}
        rowGap={16}
        columnGap={4}
        mb="4"
      >
        {tvs.map((tv) => (
          <SearchTvItem
            isComparable
            key={tv.id}
            slug={tv.slug || ""}
            fullName={getFullName(tv)}
            picture={getPicture(tv)}
            score={tv.score || 0}
            brand={getBrand(tv)}
            imageTechnology={getImageTechnology(tv)}
            model={getModel(tv)}
            releaseDate={getReleaseDate(tv)}
            resolutionIcon={getResolution(tv)}
            screenSize={getScreenSize(tv)}
            price={tv.minPrice || 0}
          />
        ))}
      </Grid>
    </>
  );
};

export default SimilarTvs;
