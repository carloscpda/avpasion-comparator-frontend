import { gql } from "@apollo/client";

export const CORE_TV = gql`
  fragment CoreTv on Tv {
    name
    ean
    slug
    score
    minPrice
    maxPrice
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
      score
      resolution {
        data {
          id
          attributes {
            resolution
            alternativeName
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
        panel {
          data {
            id
            attributes {
              type
            }
          }
        }
        lightingType {
          data {
            id
            attributes {
              name
            }
          }
        }
        creationColor {
          data {
            id
            attributes {
              name
            }
          }
        }
        panelManufacturer {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
      backlightAndContrast {
        id
        brightness
        contrast
        zoneNumber
        backlightType {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
      colorimetry {
        id
        dciP3
        rec709
        rec2020
        sRGB
        colorDepth {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
      hdr {
        id
        technologies {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
      crystal {
        id
        horizontalVisionAngle
        verticalVisionAngle
        antiReflectiveFilter
      }
      processing {
        id
        processor {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
      responseTimes {
        id
        gaming {
          data {
            id
            attributes {
              name
            }
          }
        }
        inputLag60
        inputLag120
      }
    }
    sound {
      id
      score
      speakers {
        id
        power
        quantity
      }
      subwoofers {
        id
        power
        quantity
      }
      power
      outputChannels
      technologies {
        data {
          id
          attributes {
            name
          }
        }
      }
    }
    connections {
      id
      score
      dvb {
        data {
          id
          attributes {
            name
            type
          }
        }
      }
      hbbTV
      cable {
        id
        quantity
        type {
          data {
            id
            attributes {
              name
              connection {
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
        connectionTechnologies {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
      wireless {
        data {
          id
          attributes {
            name
            type {
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
      extraFeatures {
        data {
          id
          attributes {
            name
            description
          }
        }
      }
    }
    design {
      id
      score
      dimensionsWithStand {
        id
        width
        height
        depth
        weight
      }
      dimensionsWithoutStand {
        id
        width
        height
        depth
        weight
      }
      screenShape {
        data {
          id
          attributes {
            name
          }
        }
      }
      colors {
        data {
          id
          attributes {
            name
            hex
          }
        }
      }
      vesa {
        data {
          id
          attributes {
            size
          }
        }
      }
      pictures {
        data {
          id
          attributes {
            url
            alternativeText
            height
            width
          }
        }
      }
    }
    system {
      id
      score
      operatingSystem {
        data {
          id
          attributes {
            version
            operatingSystem {
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
      voiceAssistants {
        data {
          id
          attributes {
            name
          }
        }
      }
      hardware {
        id
        ram
        rom
        soc {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
      consumption {
        id
        energyEfficiency
        averageConsumption
        consumption
        standbyConsumption
      }
      powerSupply
      powerSupplyFrequency
    }
    reviews {
      id
      reviews {
        data {
          id
          attributes {
            title
            url
            video
            image
            type
          }
        }
      }
      comparatives {
        data {
          id
          attributes {
            title
            url
            video
            image
            type
          }
        }
      }
    }
  }
`;
