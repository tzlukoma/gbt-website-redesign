import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import ServiceIcon from '../../components/ServiceIcon';

const ServicePage = ({ data: { sanitySiteSettings: { _rawServiceText } } }) => {
  return (
    <div className="max-w-prose m-auto">
      <div className="w-1/2 m-auto p-5" >
        <ServiceIcon />
      </div>
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