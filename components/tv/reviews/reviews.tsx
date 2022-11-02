import { Box, Grid, Heading } from "@chakra-ui/react";
import { Review } from "../../../models/review";
import ReviewCard from "../../reviews/review";

const ReviewsSection = ({
  title,
  reviews,
}: {
  title: string;
  reviews: Review[];
}) => {
  return (
    <Box mb="10">
      <Heading
        as="h2"
        size="md"
        fontWeight="extrabold"
        textTransform="uppercase"
        mb="4"
      >
        {title}
      </Heading>
      <Grid
        gap={4}
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        }}
      >
        {reviews.map((review) => (
          <ReviewCard key={review?.url} review={review} />
        ))}
      </Grid>
    </Box>
  );
};

export default ReviewsSection;
