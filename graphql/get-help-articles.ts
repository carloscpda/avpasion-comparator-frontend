import { gql } from "@apollo/client";
import ApolloClient from "../apollo-client";
import { GetHelpArticlesQuery } from "../gql/graphql";

const getHelpArticles = async () => {
  const { data } = await ApolloClient.getClient().query<GetHelpArticlesQuery>({
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

  return data;
};
export default getHelpArticles;
