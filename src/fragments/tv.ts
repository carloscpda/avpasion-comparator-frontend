import { graphql } from "gatsby";

export const TV = graphql`
  fragment TV on STRAPI_TV {
    name
    ean
    slug
    general {
      screenSize
      releaseDate
      brand {
        model
        serie {
          name
          brand {
            name
          }
        }
      }
    }
    image {
      score
      resolution {
        resolution
        alternativeName
      }
      technology {
        image {
          name
        }
        panel {
          type
        }
        panelManufacturer {
          name
        }
      }
      backlightAndContrast {
        brightness
        contrast
      }
      colorimetry {
        dciP3
        rec709
        rec2020
        sRGB
        colorDepth {
          name
        }
        technologies {
          name
        }
      }
      hdr {
        technologies {
          name
        }
      }
      crystal {
        horizontalVisionAngle
        verticalVisionAngle
        antiReflectiveFilter
      }
      processing {
        processor {
          name
        }
      }
      responseTimes {
        gaming {
          name
        }
        inputLag60
        inputLag120
      }
    }
    sound {
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
        name
      }
    }
    connections {
      score
      dvb {
        name
        type
      }
      hbbTV
      cable {
        quantity
        type {
          name
          connection {
            name
          }
        }
        connectionTechnologies {
          name
        }
      }
      wireless {
        name
        type {
          name
        }
      }
      extraFeatures {
        name
        description
      }
    }
    design {
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
        name
      }
      colors {
        hex
        name
      }
      vesa {
        size
      }
      pictures {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
      }
    }
    system {
      score
      operatingSystem {
        version
        operatingSystem {
          name
        }
      }
      voiceAssistants {
        name
      }
      hardware {
        ram
        rom
        soc {
          name
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
      reviews {
        title
        url
        video
        description
        image
        siteName
        slug
      }
      comparatives {
        title
        url
        video
        description
        image
        siteName
        slug
      }
    }
  }
`;
