import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://cmc.avpasion.com/graphql",
  documents: ["./graphql/**/*"],
  generates: {
    "./gql/": { preset: "client", plugins: [] },
  },
};
export default config;
