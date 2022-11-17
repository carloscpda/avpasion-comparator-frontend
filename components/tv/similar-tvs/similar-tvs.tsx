import { Grid, GridItem, List, ListItem, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { getBrand, getModel } from "../../../models/tv";
import { TvDto } from "../../../server/tvs/tv.dto";
import SectionTitle from "../../section-title";
import { useTvs } from "../tvs-provider";

const SimilarTvs = ({ tvs }: { tvs: TvDto[] }) => {
  const currentTv = useTvs().tvs[0];

  return (
    <section>
      <SectionTitle
        mt="16"
        title={`Televisiones parecidas a la ${currentTv.name}`}
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
            Comparala con televisores similares
          </Text>
          <List>
            {tvs.map((tv) => (
              <ListItem key={tv.slug} color="gray.600" mt="1">
                <NextLink
                  prefetch={false}
                  href={`/vs/${currentTv.slug}-vs-${tv.slug}`}
                >
                  {`Comparación entre ${getModel(currentTv)} y ${tv.model}`}
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
            {tvs.map((tv) => (
              <ListItem key={tv.slug} color="gray.600" mt="1">
                <NextLink prefetch={false} href={`/televisores/${tv.slug}`}>
                  {`Televisor ${tv.brand} ${tv.model} de ${tv.screenSize}"`}
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
            {tvs.map((tv) => (
              <ListItem key={tv.slug} color="gray.600" mt="1">
                <NextLink prefetch={false} href={`/televisores/${tv.slug}`}>
                  {`Televisor ${tv.brand} ${tv.model} de ${tv.screenSize}"`}
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
