import { ApolloClient, InMemoryCache, HttpLink  } from "@apollo/client";

const httpLink = new HttpLink({ uri: 'https://rickandmortyapi.com/graphql', fetchOptions: { mode: 'no-cors' } });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;