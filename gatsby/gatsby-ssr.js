import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from './src/components/Layout';
import './src/styles/global.css';

export function wrapPageElement({ element, props }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout {...props}>{element}</Layout>
    </QueryClientProvider>
  );
}
