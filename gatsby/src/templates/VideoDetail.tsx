import React from "react"
import ReactPlayer from 'react-player';
import { graphql } from 'gatsby'

import BlockContent from '@sanity/block-content-to-react'

export default function SinglePostPage({ data }) {
  const title = data.event.title
  const synopsis = data.event._rawSynopsis
  const videoUrl = data.event.videoUrl
  console.log(data)
  return (
    <div className="m-auto sm:1/3 xl:w-1/2 p-8 md:px-8 lg:px-20">
      <h1 className="text-4xl text-center">{title}</h1>
      {
        synopsis && <BlockContent blocks={synopsis} className="prose m-auto" />
      }

      <div className="relative h-0 pb-fluid-video">
        <ReactPlayer
          className="absolute top-0 left-0 w-full h-full"
          controls={true}
          width="100%"
          height="100%"
          loading="lazy"
          url={videoUrl}
          config={{
            youtube: {
              embedOptions: { modestbranding: 1, autohide: 1, showinfo: 0, controls: 0 }
            }
          }}
        />
      </div>
    </div>)
}

export const query = graphql`
    query($slug: String!){
        event: sanityEvent(slug:{current:{eq:$slug}}) {
            slug {
        current
      }
      title
      videoUrl
      host {
        name
        image {
          asset {
            fluid(maxWidth: 700) {
                ...GatsbySanityImageFluid
            }
          }
        }
      }
      guest {
        name
        image {
          asset {
            fluid(maxWidth: 700) {
                ...GatsbySanityImageFluid
            }
          }
        }
      }
        _rawSynopsis(resolveReferences: {maxDepth: 10})
      thumbnail {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
      }
            }
        }
`