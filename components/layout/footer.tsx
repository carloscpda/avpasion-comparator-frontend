import { Box, Divider, Grid, Link, Text, Wrap } from "@chakra-ui/react";
import NextLink from "next/link";
import SocialLinks from "../social-links";
import Center from "./center";

const links = [
  {
    label: "Quiénes somos",
    href: "https://www.avpasion.com/quienes-somos",
  },
  {
    label: "Aviso legal",
    href: "https://www.avpasion.com/aviso-legal",
  },
  {
    label: "Privacidad",
    href: "https://www.avpasion.com/politica-de-privacidad",
  },
  {
    label: "Política de cookies",
    href: "https://www.avpasion.com/politica-cookies",
  },
  {
    label: "Ajustes de Cookies",
    href: "https://www.avpasion.com/#",
  },
];

const Footer = () => {
  const date = new Date();
  return (
    <Box as="footer" bg="#212121" color="whiteAlpha.800" mt="32">
      <Center direction="column" alignItems="flex-end" gap="8" pt="8">
        <SocialLinks />
        <Divider borderColor="whiteAlpha.800" />
        <Grid
          width="100%"
          fontSize="xs"
          gap={8}
          gridTemplateColumns={{ base: "1fr", md: "1fr 2fr" }}
          gridTemplateRows="1fr 1fr"
        >
          <Text
            gridRow={{ base: 2, md: 1 }}
          >{`© ${date.getFullYear()} AVPasión`}</Text>
          <Wrap
            gridColumn={{ base: "1", md: 2 }}
            gridRow={1}
            spacingX={4}
            spacingY={2}
            justifySelf={{ md: "flex-end" }}
          >
            {links.map((link) => (
              <NextLink key={link.label} href={link.href} passHref>
                <Link>{link.label}</Link>
              </NextLink>
            ))}
          </Wrap>
        </Grid>
      </Center>
    </Box>
  );
};

export default Footer;
