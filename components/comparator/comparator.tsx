import {
  IoColorPaletteOutline,
  IoImageOutline,
  IoMusicalNotesOutline,
  IoSettingsOutline,
  IoWifiOutline,
} from "react-icons/io5";
import Ad from "../ad";
import ConnectionsSection from "./sections/connections/connections";
import DVBSection from "./sections/connections/dvb";
import ExtraFeaturesSection from "./sections/connections/extra-features";
import HybridTvSection from "./sections/connections/hybrid-tv";
import WirelessConnectionsSection from "./sections/connections/wireless-connections";
import OthersDesignSection from "./sections/design/others";
import {
  StructureWithoutStandSection,
  StructureWithStandSection,
} from "./sections/design/structure";
import BacklightAndContrastSection from "./sections/image/backlight-and-contrast";
import ColorimetrySection from "./sections/image/colorimetry";
import CrystalSection from "./sections/image/crystal";
import HDRSection from "./sections/image/hdr";
import ProcessingSection from "./sections/image/processing";
import ResolutionSection from "./sections/image/resolution";
import ResponseTimesSection from "./sections/image/response-times";
import ImageTechnologySection from "./sections/image/technology";
import Section from "./sections/section";
import SpeakersSection from "./sections/sound/speakers";
import SoundTechnologiesSection from "./sections/sound/technologies";
import ConsumptionSection from "./sections/system/consumption";
import HardwareSection from "./sections/system/hardware";
import OperatingSystemSection from "./sections/system/operating-system";
import PowerSupplySection from "./sections/system/power-supply";

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
    <Ad id="ssm_ctv_roba1_pdp" />
    <Section
      id="sound"
      title="Sonido"
      icon={IoMusicalNotesOutline}
      getScore={(tv) => tv.sound?.score || 0}
    >
      <SpeakersSection />
      <SoundTechnologiesSection />
    </Section>
    <Ad id="ssm_ctv_roba2_pdp" />
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
    <Ad id="ssm_ctv_roba3_pdp" />
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
    <Ad id="ssm_ctv_roba4_pdp" />
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
