import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import React from 'react'

const SolidPage = ({ data: { sanitySiteSettings: { _rawSolidText } } }) => {
  return (
    <div className="max-w-prose m-auto">
      <img src="/solid.svg" alt="solid icon" className="w-1/2 m-auto p-5" />
      <BlockContent blocks={_rawSolidText} className="prose lg:prose-xl p-5" />
    </div>
  )
}

export default SolidPage

export const query = graphql`
  query SolidPageQuery {
    sanitySiteSettings {
        _rawSolidText
    }
  }
`;