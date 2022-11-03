import { gql } from "@apollo/client";
import apollo from "../apollo-client";
import { GetCableConnectionsFilterQuery } from "../gql/graphql";

const getCableConnectionsFilter = async () => {
  const { data } = await apollo.query<GetCableConnectionsFilterQuery>({
    fetchPolicy: "network-only",
    query: gql`
      query GetCableConnectionsFilter {
        connectionTypes(pagination: { limit: -1 }) {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    `,
  });

  return (
    data.connectionTypes?.data.map((conn) => ({
      id: conn.id as string,
      name: conn.attributes?.name as string,
    })) || []
  );
};

export default getCableConnectionsFilter;
