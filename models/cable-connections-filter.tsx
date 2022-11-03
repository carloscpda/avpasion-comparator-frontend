import getCableConnectionsFilter from "../graphql/get-cable-connections-filter";

export type CableConnectionFilter = Awaited<
  ReturnType<typeof getCableConnectionsFilter>
>[number];
