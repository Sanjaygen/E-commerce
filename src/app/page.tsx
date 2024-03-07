'use client'

import Homepage from "@/pages/homepage/Homepage";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://e-commerce-strapi-app.onrender.com/graphql',
  cache: new InMemoryCache
})
console.log('apichecking',process.env);

export default function Home() {
  return (
    <main>
      <ApolloProvider client={client}>
      <Homepage/>
      </ApolloProvider>
    </main>
  );
}