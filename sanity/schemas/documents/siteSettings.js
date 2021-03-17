import { FaHome as icon } from 'react-icons/fa'

export default {
  title: 'Global Site Settings',
  name: 'siteSettings',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'Title',
      type: 'string'
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
