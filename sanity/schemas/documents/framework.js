import { FaShapes as icon } from 'react-icons/fa'

export default {
  title: 'Framework',
  name: 'framework',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    // add a unique slug field for queries, permalinks etc
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        // auto generates a slug from the title field
        source: 'name',
        auto: true
      }
    },
    {
      title: 'Illustration',
      name: 'illustration',
      type: 'image'
    },
    {
      title: 'Concepts',
      name: 'topic',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'topic' }]
        }
      ]
    },
    {
      title: 'Related Ideas',
      name: 'relatedIdea',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'framework' }, { type: 'topic' }]
        }
      ]
    }
  ]
}
