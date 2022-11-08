import { gql } from "@apollo/client";

export const SEARCH_TV = gql`
  fragment SearchTv on Tv {
    name
    slug
    score
    ean
    minPrice
    general {
      id
      screenSize
      releaseDate
      brand {
        id
        model
        serie {
          data {
            id
            attributes {
              name
              brand {
                data {
                  id
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
      id
      resolution {
        data {
          id
          attributes {
            icon {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
        }
      }
      technology {
        id
        image {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
    design {
      id
      score
      pictures {
        data {
          id
          attributes {
            url
            alternativeText
          }
        }
      }
    }
  }
`;
