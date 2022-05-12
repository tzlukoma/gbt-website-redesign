import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import React from 'react'

const SurplusPage = ({ data: { sanitySiteSettings: { _rawSurplusText } } }) => {
  return (
    <div className="max-w-prose m-auto">
      <img src="/surplus.svg" alt="surplus icon" className="w-1/2 m-auto p-5" />
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