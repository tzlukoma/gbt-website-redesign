import React from 'react'
import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';

import SteadyIcon from '../../components/SteadyIcon';

const SteadyPage = ({ data: { sanitySiteSettings: { _rawSteadyText } } }) => {
  return (
    <div className="max-w-prose m-auto">
      <div className="w-1/2 m-auto p-5">
        <SteadyIcon />
      </div>
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