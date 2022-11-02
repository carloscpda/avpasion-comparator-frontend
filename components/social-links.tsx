import { Flex, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaFacebookF,
    alt: "Facebook",
    link: "https://www.facebook.com/avpasion.oficial",
  },
  {
    icon: IoLogoTwitter,
    alt: "Twitter",
    link: "https://twitter.com/AVPasion",
  },
  {
    icon: FaTelegramPlane,
    alt: "Telegram",
    link: "https://t.me/AVPasion",
  },
  {
    icon: IoLogoPinterest,
    alt: "Pinterest",
    link: "https://www.pinterest.es/AVPasion/",
  },
  {
    icon: IoLogoInstagram,
    alt: "Instagram",
    link: "https://www.instagram.com/avpasion/",
  },
  {
    icon: IoLogoYoutube,
    alt: "Youtube",
    link: "https://www.youtube.com/c/AVPasion",
  },
];

const SocialLinks = () => {
  return (
    <Flex gap="4">
      {socialLinks.map((link) => (
        <NextLink key={link.alt} href={link.link}>
          <a target="_blank">
            <Icon as={link.icon} fontSize="sm" />
          </a>
        </NextLink>
      ))}
    </Flex>
  );
};

export default SocialLinks;
