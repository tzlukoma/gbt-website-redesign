import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import React from 'react'

const ServicePage = ({ data: { sanitySiteSettings: { _rawServiceText } } }) => {
  return (
    <div className="max-w-prose m-auto">
      <img src="/service.svg" alt="service icon" className="w-1/2 m-auto p-5" />
      <BlockContent blocks={_rawServiceText} className="prose lg:prose-xl p-5" />
    </div>
  )
}

export default ServicePage

export const query = graphql`
  query ServicePageQuery {
    sanitySiteSettings {
        _rawServiceText
    }
  }
`;