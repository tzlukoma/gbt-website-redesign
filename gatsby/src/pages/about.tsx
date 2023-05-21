import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage } from 'gatsby-plugin-image';

function AboutPage({ data }) {
  const image = data.sanitySiteSettings.aboutImage;
  const content = data.sanitySiteSettings._rawAboutText;

  return (
    <div className="p-8 md:px-8 lg:px-20">
      <div className="max-w-2xl m-auto">
        <h1 className="text-4xl text-center">Hi, I'm George</h1>
        <div className="m-auto w-2/3 sm:w-4/12 px-4">
          <GatsbyImage
            className="my-10 shadow rounded-full max-w-full h-auto align-middle border-none"
            image={image.asset.gatsbyImageData}
            alt="George image"
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
    sanitySiteSettings {
      heroImage {
        asset {
          gatsbyImageData(width: 700, placeholder: BLURRED)
        }
      }
      aboutImage {
        asset {
          gatsbyImageData(width: 700, placeholder: BLURRED)
        }
      }
      _rawAboutText
    }
  }
`;
