'use client'

import Homepage from "@/pages/homepage/Homepage";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
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