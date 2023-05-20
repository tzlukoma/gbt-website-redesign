import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

export const VIDEO_EVENTS = `
*[_type == "event"]{
  "id":_id,
  date,
  publishPlatform -> {
    name, 
    platformUrl,
    platformImage,
  },
  slug,
  status,
  thumbnail,
  title,
  videoUrl
} 
`

export const ALL_EVENTS = `
*[_type == "event"]{
    "id":_id,
    date,
    publishPlatform -> {
      name, 
      platformUrl,
      platformImage,
    },
    slug,
    status,
    thumbnail,
    title,
    synopsis,
    registerUrl,
    videoUrl
  }  
`

export const SITE_SETTINGS = `
*[_type == "siteSettings"]
`