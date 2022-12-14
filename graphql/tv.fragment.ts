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
      screenSize
      releaseDate
      brand {
        model
        serie {
          data {
            id
            attributes {
              uid
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
      id
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
        panel {
          data {
            attributes {
              type
            }
          }
        }
        lightingType {
          data {
            attributes {
              name
            }
          }
        }
        creationColor {
          data {
            attributes {
              name
            }
          }
        }
        panelManufacturer {
          data {
            attributes {
              name
            }
          }
        }
      }
      backlightAndContrast {
        brightness
        contrast
        zoneNumber
        backlightType {
          data {
            attributes {
              name
            }
          }
        }
      }
      colorimetry {
        dciP3
        rec709
        rec2020
        sRGB
        colorDepth {
          data {
            attributes {
              name
            }
          }
        }
      }
      hdr {
        technologies {
          data {
            attributes {
              name
            }
          }
        }
      }
      crystal {
        horizontalVisionAngle
        verticalVisionAngle
        antiReflectiveFilter
      }
      processing {
        processor {
          data {
            attributes {
              name
            }
          }
        }
      }
      responseTimes {
        gaming {
          data {
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
        power
        quantity
      }
      subwoofers {
        power
        quantity
      }
      power
      outputChannels
      technologies {
        data {
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
          attributes {
            name
            type
          }
        }
      }
      hbbTV
      cable {
        quantity
        type {
          data {
            attributes {
              name
              connection {
                data {
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
            attributes {
              name
            }
          }
        }
      }
      wireless {
        data {
          attributes {
            name
            type {
              data {
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
        width
        height
        depth
        weight
      }
      dimensionsWithoutStand {
        width
        height
        depth
        weight
      }
      screenShape {
        data {
          attributes {
            name
          }
        }
      }
      colors {
        data {
          attributes {
            name
            hex
          }
        }
      }
      vesa {
        data {
          attributes {
            size
          }
        }
      }
      pictures {
        data {
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
          attributes {
            version
            operatingSystem {
              data {
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
          attributes {
            name
          }
        }
      }
      hardware {
        ram
        rom
        soc {
          data {
            attributes {
              name
            }
          }
        }
      }
      consumption {
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
