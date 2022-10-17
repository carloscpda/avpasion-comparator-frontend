import React from "react";
import {
  IoColorPaletteOutline,
  IoImageOutline,
  IoMusicalNotesOutline,
  IoSettingsOutline,
  IoWifiOutline,
} from "react-icons/io5";

import Section from "./sections/section";
import ConnectionsSection from "./sections/connections/connections";
import DVBSection from "./sections/connections/dvb";
import WirelessConnectionsSection from "./sections/connections/wireless-connections";
import ExtraFeaturesSection from "./sections/connections/extra-features";
import SpeakersSection from "./sections/sound/speakers";
import SoundTechnologiesSection from "./sections/sound/technologies";
import ImageTechnologySection from "./sections/image/technology";
import ResolutionSection from "./sections/image/resolution";
import BacklightAndContrastSection from "./sections/image/backlight-and-contrast";
import ColorimetrySection from "./sections/image/colorimetry";
import HDRSection from "./sections/image/hdr";
import CrystalSection from "./sections/image/crystal";
import ProcessingSection from "./sections/image/processing";
import ResponseTimesSection from "./sections/image/response-times";
import {
  StructureWithoutStandSection,
  StructureWithStandSection,
} from "./sections/design/structure";
import OthersDesignSection from "./sections/design/others";
import OperatingSystemSection from "./sections/system/operating-system";
import HardwareSection from "./sections/system/hardware";
import ConsumptionSection from "./sections/system/consumption";
import PowerSupplySection from "./sections/system/power-supply";
import HybridTvSection from "./sections/connections/hybrid-tv";

const Comparator = () => (
  <>
    <Section
      id="image"
      title="Imagen"
      icon={IoImageOutline}
      getScore={(tv) => tv.image?.score || 0}
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
      getScore={(tv) => tv.sound?.score || 0}
    >
      <SpeakersSection />
      <SoundTechnologiesSection />
    </Section>
    <Section
      id="connectivity"
      title="Conexión"
      icon={IoWifiOutline}
      getScore={(tv) => tv.connections?.score || 0}
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
      getScore={(tv) => tv.design?.score || 0}
    >
      <StructureWithStandSection />
      <StructureWithoutStandSection />
      <OthersDesignSection />
    </Section>
    <Section
      id="system"
      title="Sistema"
      icon={IoSettingsOutline}
      getScore={(tv) => tv.system?.score || 0}
    >
      <OperatingSystemSection />
      <HardwareSection />
      <ConsumptionSection />
      <PowerSupplySection />
    </Section>
  </>
);

export default Comparator;
