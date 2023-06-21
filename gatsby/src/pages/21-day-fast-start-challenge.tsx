import React from 'react';
import { graphql, Script } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage } from 'gatsby-plugin-image';

const FastStartPage = ({ data }) => {
  const image = data.sanitySiteSettings.fastStartImage;
  const content = data.sanitySiteSettings._rawFastStartText;
  return (
    <>
      <Script src="https://js.stripe.com/v3/buy-button.js" />

      <div className="p-8 md:px-8 lg:px-20">
        <div className="max-w-2xl m-auto">
          <h1 className="text-5xl text-center">
            Join the 21-Day Fast Start Challenge and Transform Your Finances in
            21 Days!
          </h1>
          <BlockContent blocks={content} className="prose lg:prose-xl" />
          <div className="m-auto w-2/3 px-4 my-10">
            <GatsbyImage
              className=""
              image={image.asset.gatsbyImageData}
              alt="George image"
            />
          </div>
          <div className="text-center mt-10">
            <stripe-buy-button
              buy-button-id="buy_btn_1NLD6CCx3ak7i68bGKS4NrPN"
              publishable-key="pk_live_51NL8kWCx3ak7i68bfnmuZfMBBE6CwbOMWAcRKK07PN4ofoqPcyIdEg9gjKdUKZ7xaB0clTWs6EWivNKOfgKPjO9D00JYlWmM9P"
            ></stripe-buy-button>
          </div>
          <p className="prose lg:prose-xl mt-10">
            I can't wait to see the incredible progress you'll make in just
            three weeks. Together, we'll unlock a future of financial freedom,
            security, and abundance.
          </p>
        </div>
      </div>
    </>
  );
};

export default FastStartPage;

export const query = graphql`
  query FastStartPageQuery {
    sanitySiteSettings {
      heroImage {
        asset {
          gatsbyImageData(width: 700, placeholder: BLURRED)
        }
      }
      fastStartImage {
        asset {
          gatsbyImageData(width: 700, placeholder: BLURRED)
        }
      }
      _rawFastStartText
    }
  }
`;
