import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import StrugglingIcon from '../../components/StrugglingIcon';

const StrugglingPage = ({ data }) => {
  const strugglingText = data?.sanitySiteSettings?._rawStrugglingText;
  return (
    <div className="max-w-prose m-auto">
      <div className="w-1/2 m-auto p-5">
        <StrugglingIcon />
      </div>
      <BlockContent blocks={strugglingText} className="prose lg:prose-xl p-5" />
    </div>
  );
};

export default StrugglingPage;

export const query = graphql`
  query StrugglingPageQuery {
    sanitySiteSettings {
      _rawStrugglingText
    }
  }
`;
