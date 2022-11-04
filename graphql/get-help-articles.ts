import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { GetHelpArticlesQuery } from "../gql/graphql";
import { Review } from "../models/review";

const getHelpArticles = async () => {
  const { data } = await apollo.query<GetHelpArticlesQuery>({
    query: gql`
      query GetHelpArticles {
        helpArticlesSection {
          data {
            attributes {
              section1 {
                title
                articles {
                  data {
                    attributes {
                      title
                      image
                      type
                      url
                      video
                    }
                  }
                }
              }
              section2 {
                title
                articles {
                  data {
                    attributes {
                      title
                      image
                      type
                      url
                      video
                    }
                  }
                }
              }
              section3 {
                title
                articles {
                  data {
                    attributes {
                      title
                      image
                      type
                      url
                      video
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    section1: {
      title: data.helpArticlesSection?.data?.attributes?.section1.title,
      articles:
        data.helpArticlesSection?.data?.attributes?.section1.articles?.data.map(
          (r) => r.attributes as Review
        ) || [],
    },
    section2: {
      title: data.helpArticlesSection?.data?.attributes?.section2.title,
      articles:
        data.helpArticlesSection?.data?.attributes?.section2.articles?.data.map(
          (r) => r.attributes as Review
        ) || [],
    },
    section3: {
      title: data.helpArticlesSection?.data?.attributes?.section3.title,
      articles:
        data.helpArticlesSection?.data?.attributes?.section3.articles?.data.map(
          (r) => r.attributes as Review
        ) || [],
    },
  };
};
export default getHelpArticles;
