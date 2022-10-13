import { CreatePagesArgs } from "gatsby";
import path from "path";

exports.createPages = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;

  // Define a template for blog post
  const tvTemplate = path.resolve("./src/templates/tv.tsx");

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
        component: tvTemplate,
        context: {
          slug: tv.node.slug,
          serieId: tv.node.general?.brand?.serie?.id,
        },
      });
    }
  });
};
