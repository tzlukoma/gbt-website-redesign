import React from 'react'
import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import SolidIcon from '../../components/SolidIcon';

const SolidPage = ({ data: { sanitySiteSettings: { _rawSolidText } } }) => {
  return (
    <div className="max-w-prose m-auto">
      <div className="w-1/2 m-auto p-5" >
        <SolidIcon />
      </div>
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