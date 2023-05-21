import { } from 'gatsby-plugin-image';

export interface Event {
  node: {
    id: number,
    date: string,
    publishPlatform: {
      name: string,
      platformUrl,
      platformImage: {
        asset: any
      } | null,
    } | null,
    slug: {
      current: string
    },
    status: string,
    thumbnail: {
      asset: any
    } | null,
    title: string,
    synopsis: [{
      children: [
        {
          text: string
        }
      ]
    }],
    registerUrl: string | null,
    videoUrl: string | null,
  }
}