import React from "react";
import { graphql, PageProps } from "gatsby";
import TvProvider from "../components/vs/tvs-provider";
import Navbar from "../components/vs/navbar";
import Layout from "../layout/layout";
import GeneralSection from "../components/vs/sections/general";
import ConnectionsSection from "../components/vs/sections/connections/connections";
import { Flex } from "@chakra-ui/react";
import DVBSection from "../components/vs/sections/connections/dvb";
import WirelessConnectionsSection from "../components/vs/sections/connections/wireless-connections";
import ExtraFeaturesSection from "../components/vs/sections/connections/extra-features";
import Section from "../components/vs/sections/section";
import SpeakersSection from "../components/vs/sections/sound/speakers";
import SoundTechnologiesSection from "../components/vs/sections/sound/technologies";
import ImageTechnologySection from "../components/vs/sections/image/technology";
import ResolutionSection from "../components/vs/sections/image/resolution";
import BacklightAndContrastSection from "../components/vs/sections/image/backlight-and-contrast";
import ColorimetrySection from "../components/vs/sections/image/colorimetry";
import HDRSection from "../components/vs/sections/image/hdr";
import CrystalSection from "../components/vs/sections/image/crystal";
import ProcessingSection from "../components/vs/sections/image/processing";
import ResponseTimesSection from "../components/vs/sections/image/response-times";
import {
  StructureWithoutStandSection,
  StructureWithStandSection,
} from "../components/vs/sections/design/structure";
import OthersDesignSection from "../components/vs/sections/design/others";
import OperatingSystemSection from "../components/vs/sections/system/operating-system";
import HardwareSection from "../components/vs/sections/system/hardware";
import ConsumptionSection from "../components/vs/sections/system/consumption";
import PowerSupplySection from "../components/vs/sections/system/power-supply";
import SerieSection from "../components/vs/sections/serie/serie";
import {
  IoColorPaletteOutline,
  IoImageOutline,
  IoMusicalNotesOutline,
  IoSettingsOutline,
  IoWifiOutline,
} from "react-icons/io5";
import HybridTvSection from "../components/vs/sections/connections/hybrid-tv";

export default function TvComparatorPage({
  data,
}: PageProps<Queries.TvComparatorPageQuery>) {
  const { allStrapiTv } = data;

  return (
    <Layout>
      <TvProvider value={allStrapiTv.nodes}>
        {/* <Navbar /> */}
        <Flex
          as="main"
          direction="column"
          maxW={{ lg: "62em" }}
          my={0}
          mx={[4, 8, 8, "auto"]}
        >
          {/*    <GeneralSection />
          <SerieSection tvs={allStrapiTv} /> */}
          <Section
            id="image"
            title="Imagen"
            icon={IoImageOutline}
            //score={strapiTv?.image?.score || 0}
          >
            <ResolutionSection />
            <ImageTechnologySection />
            <BacklightAndContrastSection />
            <ColorimetrySection />
            <HDRSection />
            {/* 
            <CrystalSection />
            <ProcessingSection />
            <ResponseTimesSection /> */}
          </Section>
          {/* <Section
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
            <DVBSection />
            <HybridTvSection />
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
          </Section> */}
        </Flex>
      </TvProvider>
    </Layout>
  );
}

export const query = graphql`
  query TvComparatorPage($slugs: [String]!) {
    allStrapiTv(filter: { slug: { in: $slugs } }) {
      nodes {
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
    }
  }
`;
