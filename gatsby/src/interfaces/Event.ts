import { FluidObject } from 'gatsby-image';

export interface Event {
  node: {
    id: number,
    date: string,
    publishPlatform: {
      name: string,
      platformImage: {
        asset: {
          fluid: FluidObject
        }
      } | null,
    } | null,
    slug: {
      current: string
    },
    status: string,
    thumbnail: {
      asset: {
        fluid: FluidObject
      }
    } | null,
    title: string,
    synopsis: [{
      children: [
        {
          text: string
        }
      ]
    }],
    videoUrl: string | null,
  }
}