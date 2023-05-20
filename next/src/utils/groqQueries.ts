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