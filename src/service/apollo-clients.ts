import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://e-commerce-strapi-app.onrender.com/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;