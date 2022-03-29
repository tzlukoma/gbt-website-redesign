import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import LogRocket from 'logrocket';
import Layout from './src/components/Layout';
import './src/styles/global.css';

LogRocket.init('3hr770/georgebthompsoncom');

export function wrapPageElement({ element, props }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout {...props}>{element}</Layout>
    </QueryClientProvider>
  );
}
