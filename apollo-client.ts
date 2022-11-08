import {
  ApolloClient as ApolloClientBuild,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

class ApolloClient {
  private static apollo: ApolloClientBuild<any>;
  private static cache: InMemoryCache;

  private constructor() {}

  private static build() {
    const httpLink = createHttpLink({
      uri: "https://cmc.avpasion.com/graphql",
    });

    const authLink = setContext((_, { headers }) => {
      // get the authentication token from local storage if it exists
      const token = process.env.STRAPI_TOKEN;
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });

    ApolloClient.cache = new InMemoryCache();

    ApolloClient.apollo = new ApolloClientBuild({
      link: authLink.concat(httpLink),
      cache: ApolloClient.cache,
      name: `avpasion-nextjs-client-${process.env.NODE_ENV}`,
      version: "0.1.0",
      assumeImmutableResults: true,
      defaultOptions: {
        query: {
          fetchPolicy: "no-cache",
        },
      },
    });
  }

  public static getClient(): ApolloClientBuild<any> {
    if (!ApolloClient.apollo && !ApolloClient.cache) {
      this.build();
    }

    return ApolloClient.apollo;
  }

  public static getCache(): InMemoryCache {
    if (!ApolloClient.apollo && !ApolloClient.cache) {
      this.build();
    }

    return ApolloClient.cache;
  }
}

export default ApolloClient;
