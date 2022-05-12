import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import React from 'react'

const StrugglingPage = ({ data: { sanitySiteSettings: { _rawStrugglingText } } }) => {
    return (
        <div className="max-w-prose m-auto">
            <img src="/struggling.svg" alt="struggling icon" className="w-1/2 m-auto p-5" />
            <BlockContent blocks={_rawStrugglingText} className="prose lg:prose-xl p-5" />
        </div>
    )
}

export default StrugglingPage

export const query = graphql`
  query StrugglingPageQuery {
    sanitySiteSettings {
        _rawStrugglingText
    }
  }
`;