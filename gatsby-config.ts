import type { GatsbyConfig } from "gatsby";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "tv",
      queryParams: {
        populate: {
          general: {
            populate: {
              brand: {
                populate: {
                  serie: {
                    populate: {
                      brand: "*",
                    },
                  },
                },
              },
            },
          },
          image: {
            populate: {
              resolution: "*",
              technology: {
                populate: {
                  image: "*",
                  panel: "*",
                  subpixel: "*",
                  panelManufacturer: "*",
                },
              },
              hdr: {
                populate: {
                  technologies: "*",
                },
              },
              backlightAndContrast: {
                pupulate: {
                  backlightType: "*",
                },
              },
              colorimetry: {
                populate: {
                  technologies: "*",
                  colorDepth: "*",
                },
              },
              crystal: "*",
              processing: {
                populate: {
                  processor: "*",
                },
              },
              responseTimes: {
                populate: {
                  gaming: "*",
                },
              },
            },
          },
          sound: {
            populate: {
              speakers: "*",
              subwoofers: "*",
              technologies: "*",
            },
          },
          connections: {
            populate: {
              dvb: "*",
              cable: {
                populate: {
                  type: {
                    populate: {
                      connection: "*",
                    },
                  },
                  connectionTechnologies: "*",
                },
              },
              wireless: {
                populate: {
                  type: "*",
                },
              },
              extraFeatures: "*",
            },
          },
          design: {
            populate: {
              dimensionsWithStand: "*",
              dimensionsWithoutStand: "*",
              screenShape: "*",
              colors: "*",
              pictures: "*",
              vesa: "*",
            },
          },
          system: {
            populate: {
              operatingSystem: {
                populate: {
                  operatingSystem: "*",
                },
              },
              voiceAssistants: "*",
              hardware: {
                populate: {
                  soc: "*",
                },
              },
              consumption: "*",
            },
          },
          reviews: {
            populate: {
              reviews: "*",
              comparatives: "*",
            },
          },
        },
      },
    },
  ],
  singleTypes: [
    {
      singularName: "score-weighting",
    },
  ],
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `avpasion-comparator-gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
  ],
};

export default config;
