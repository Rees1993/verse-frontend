import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.CRAFT_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  },
});

export default client;
