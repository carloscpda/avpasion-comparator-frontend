import { gql } from "@apollo/client";

export const SEARCH_TV = gql`
  fragment SearchTv on Tv {
    name
    slug
    score
    ean
    minPrice
    general {
      screenSize
      releaseDate
      brand {
        model
        serie {
          data {
            attributes {
              name
              brand {
                data {
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
    image {
      resolution {
        data {
          attributes {
            icon {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
      technology {
        image {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
    design {
      score
      pictures {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }
    }
  }
`;
