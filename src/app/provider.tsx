'use client';

import React from 'react';

import { ApolloProvider } from '@apollo/client';
import createApolloClient from '@/service/apollo-clients';

const client = createApolloClient();

const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <ApolloProvider client={client}>
                    {children}
        </ApolloProvider>
    );
};

export default AppProviders;
