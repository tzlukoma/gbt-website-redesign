import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import React from 'react'

const SteadyPage = ({ data: { sanitySiteSettings: { _rawSteadyText } } }) => {
  return (
    <div className="max-w-prose m-auto">
      <img src="/steady.svg" alt="steady icon" className="w-1/2 m-auto p-5" />
      <BlockContent blocks={_rawSteadyText} className="prose lg:prose-xl p-5" />
    </div>
  )
}

export default SteadyPage

export const query = graphql`
  query SteadyPageQuery {
    sanitySiteSettings {
        _rawSteadyText
    }
  }
`;