import { CreatePagesArgs } from "gatsby";
import path from "path";

exports.createPages = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;

  // Templates
  const tvTemplate = path.resolve("./src/templates/tv.tsx");
  const tvComparatorTemplate = path.resolve("./src/templates/vs.tsx");

  const result = await graphql(`
    query CreatePages {
      allStrapiTv {
        edges {
          node {
            slug
            general {
              brand {
                serie {
                  id
                }
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi tvs`,
      result.errors
    );

    return;
  }

  const tvs = (result.data as Queries.CreatePagesQuery).allStrapiTv.edges;

  tvs.forEach((tv) => {
    if (tv.node.slug) {
      createPage({
        path: `/tv/${tv.node.slug}`,
        component: tvComparatorTemplate,
        context: {
          slugs: [tv.node.slug],
          serieId: tv.node.general?.brand?.serie?.id,
        },
      });

      tvs.forEach((vsTv) => {
        if (vsTv.node.slug && (tv.node.slug as string) > vsTv.node.slug) {
          createPage({
            path: `/vs/${tv.node.slug}--vs--${vsTv.node.slug}`,
            component: tvComparatorTemplate,
            context: {
              slugs: [tv.node.slug, vsTv.node.slug],
            },
          });
        }
      });
    }
  });
};
