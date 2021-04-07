import React from 'react';
import { graphql } from 'gatsby'
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react'

function AboutPage({ data }) {
  console.log(data)
  const image = data.allSanityPost.edges[0].node.mainImage
  const content = data.allSanityPost.edges[0].node._rawBody
  console.log(content)

  return (
    <div className="p-8 md:px-8 lg:px-20">

      <div className="max-w-2xl m-auto">
        <h1 className="text-4xl text-center">Hi, I'm George</h1>
        <div className="m-auto w-2/3 sm:w-4/12 px-4">
          <Img
            className="my-10 shadow rounded-full max-w-full h-auto align-middle border-none"
            fluid={image.asset.fluid}
          />
        </div>
        <BlockContent blocks={content} className="prose lg:prose-xl" />
      </div>

    </div>
  );
}

export default AboutPage;

export const query = graphql`
query AboutPageQuery {
  allSanityPost(filter: {slug: {current: {eq: "about-george"}}}) {
    edges {
      node {
        mainImage {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
        _rawBody(resolveReferences: {maxDepth: 10})
      }
    }
  }
}
`