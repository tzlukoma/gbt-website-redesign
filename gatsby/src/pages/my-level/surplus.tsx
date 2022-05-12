import React from 'react'
import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import SurplusIcon from '../../components/SurplusIcon';

const SurplusPage = ({ data: { sanitySiteSettings: { _rawSurplusText } } }) => {
  return (
    <div className="max-w-prose m-auto">
      <div className="w-1/2 m-auto p-5">
        <SurplusIcon />
      </div>
      <BlockContent blocks={_rawSurplusText} className="prose lg:prose-xl p-5" />
    </div>
  )
}

export default SurplusPage

export const query = graphql`
  query SurplusPageQuery {
    sanitySiteSettings {
        _rawSurplusText
    }
  }
`;