import { Grid, GridItem, Link, List, ListItem, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { getBrand, getFullName, getModel } from "../../../models/tv";
import { TvDto } from "../../../server/tvs/tv.dto";
import SectionTitle from "../../section-title";
import { useTvs } from "../tvs-provider";

type SimilarTvsProps = {
  similarTvIdsByImageTechnology: TvDto[];
  similarTvIdsByBrand: TvDto[];
};

const SimilarTvs = ({
  similarTvIdsByBrand,
  similarTvIdsByImageTechnology,
}: SimilarTvsProps) => {
  const currentTv = useTvs().tvs[0];

  return (
    <section>
      <SectionTitle
        mt="16"
        title={`Otros televisores como ${getFullName(currentTv)}`}
      />
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
        <GridItem as="section">
          <Text as="h3" fontWeight="medium">
            Comparativas interesantes
          </Text>
          <List>
            {similarTvIdsByImageTechnology.map((tv) => (
              <ListItem key={tv.slug} color="gray.600" mt="1">
                <NextLink
                  passHref
                  prefetch={false}
                  href={`/vs/${currentTv.slug}-vs-${tv.slug}`}
                >
                  <Link>
                    {`Comparativa ${getModel(currentTv)} vs ${tv.model}`}
                  </Link>
                </NextLink>
              </ListItem>
            ))}
          </List>
        </GridItem>
        <GridItem as="section">
          <Text as="h3" fontWeight="medium">
            Televisores similares
          </Text>
          <List>
            {similarTvIdsByImageTechnology.map((tv) => (
              <ListItem key={tv.slug} color="gray.600" mt="1">
                <NextLink
                  passHref
                  prefetch={false}
                  href={`/televisores/${tv.slug}`}
                >
                  <Link>{`Televisor ${tv.brand} ${tv.model}`}</Link>
                </NextLink>
              </ListItem>
            ))}
          </List>
        </GridItem>
        <GridItem as="section">
          <Text as="h3" fontWeight="medium">
            {`Otros televisores de ${getBrand(currentTv)}`}
          </Text>
          <List>
            {similarTvIdsByBrand.map((tv) => (
              <ListItem key={tv.slug} color="gray.600" mt="1">
                <NextLink
                  passHref
                  prefetch={false}
                  href={`/televisores/${tv.slug}`}
                >
                  <Link>{`Televisor ${tv.brand} ${tv.model}`}</Link>
                </NextLink>
              </ListItem>
            ))}
          </List>
        </GridItem>
      </Grid>
    </section>
  );
};

export default SimilarTvs;
