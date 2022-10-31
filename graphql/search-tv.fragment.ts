import { gql } from "@apollo/client";

export const SEARCH_TV = gql`
  fragment SearchTv on Tv {
    name
    slug
    score
    ean
    minPrice
    maxPrice
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
      score
      resolution {
        data {
          attributes {
            resolution
            alternativeName
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
    sound {
      score
    }
    connections {
      score
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
    system {
      score
    }
  }
`;
