import React from "react";
import { graphql, PageProps } from "gatsby";
import TvProvider from "../components/tvs/tv-provider";
import Navbar from "../components/tvs/navbar";
import Layout from "../layout/layout";
import GeneralSection from "../components/tvs/sections/general";
import ConnectionsSection from "../components/tvs/sections/connections/connections";
import { Flex } from "@chakra-ui/react";
import DVBSection from "../components/tvs/sections/connections/dvb";
import WirelessConnectionsSection from "../components/tvs/sections/connections/wireless-connections";
import Specs from "../components/tvs/sections/specs/specs";
import ExtraFeaturesSection from "../components/tvs/sections/connections/extra-features";
import Section from "../components/tvs/sections/section";
import SpeakersSection from "../components/tvs/sections/sound/speakers";
import SoundTechnologiesSection from "../components/tvs/sections/sound/technologies";
import ImageTechnologySection from "../components/tvs/sections/image/technology";
import ResolutionSection from "../components/tvs/sections/image/resolution";
import BacklightAndContrastSection from "../components/tvs/sections/image/backlight-and-contrast";
import ColorimetrySection from "../components/tvs/sections/image/colorimetry";
import HDRSection from "../components/tvs/sections/image/hdr";
import CrystalSection from "../components/tvs/sections/image/crystal";
import ProcessingSection from "../components/tvs/sections/image/processing";
import ResponseTimesSection from "../components/tvs/sections/image/response-times";
import {
  StructureWithoutStandSection,
  StructureWithStandSection,
} from "../components/tvs/sections/design/structure";
import OthersDesignSection from "../components/tvs/sections/design/others";
import OperatingSystemSection from "../components/tvs/sections/system/operating-system";
import HardwareSection from "../components/tvs/sections/system/hardware";
import ConsumptionSection from "../components/tvs/sections/system/consumption";
import PowerSupplySection from "../components/tvs/sections/system/power-supply";
import SerieSection from "../components/tvs/sections/serie/serie";
import {
  IoColorPaletteOutline,
  IoImageOutline,
  IoMusicalNotesOutline,
  IoSettingsOutline,
  IoWifiOutline,
} from "react-icons/io5";

export default function TvPage({ data }: PageProps<Queries.TvPageQuery>) {
  const { strapiTv, allStrapiTv } = data;

  return (
    <Layout>
      <TvProvider value={strapiTv}>
        <Navbar />
        <Flex as="main" direction="column" maxW={{ xl: "1200px" }} m="0 auto">
          <GeneralSection />
          <SerieSection tvs={allStrapiTv} />
          <Section
            id="image"
            title="Imagen"
            icon={IoImageOutline}
            score={strapiTv?.image?.score || 0}
          >
            <ResolutionSection />
            <ImageTechnologySection />
            <BacklightAndContrastSection />
            <ColorimetrySection />
            <HDRSection />
            <CrystalSection />
            <ProcessingSection />
            <ResponseTimesSection />
          </Section>
          <Section
            id="sound"
            title="Sonido"
            icon={IoMusicalNotesOutline}
            score={strapiTv?.sound?.score || 0}
          >
            <SpeakersSection />
            <SoundTechnologiesSection />
          </Section>
          <Section
            id="connectivity"
            title="Conectividad"
            icon={IoWifiOutline}
            score={strapiTv?.connections?.score || 0}
          >
            <Specs
              title="Televisión híbrida"
              specs={[
                {
                  label: "HbbTV",
                  type: "row",
                  value: {
                    type: "bool",
                    value: !!strapiTv?.connections?.hbbTV,
                  },
                },
              ]}
            />
            <DVBSection />
            <ConnectionsSection />
            <WirelessConnectionsSection />
            <ExtraFeaturesSection />
          </Section>
          <Section
            id="design"
            title="Diseño"
            icon={IoColorPaletteOutline}
            score={strapiTv?.design?.score || 0}
          >
            <StructureWithStandSection />
            <StructureWithoutStandSection />
            <OthersDesignSection />
          </Section>
          <Section
            id="system"
            title="Sistema"
            icon={IoSettingsOutline}
            score={strapiTv?.system?.score || 0}
          >
            <OperatingSystemSection />
            <HardwareSection />
            <ConsumptionSection />
            <PowerSupplySection />
          </Section>
        </Flex>
      </TvProvider>
    </Layout>
  );
}

export const query = graphql`
  query TvPage($slug: String!, $serieId: String) {
    strapiTv(slug: { eq: $slug }) {
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
    allStrapiTv(
      filter: { general: { brand: { serie: { id: { eq: $serieId } } } } }
    ) {
      nodes {
        slug
        name
        general {
          screenSize
        }
        image {
          resolution {
            alternativeName
          }
        }
      }
    }
  }
`;
