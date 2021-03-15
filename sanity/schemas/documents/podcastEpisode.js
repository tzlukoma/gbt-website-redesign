import { FaPodcast as icon } from 'react-icons/fa'

export default {
  title: 'Podcast Episode',
  name: 'podcastEpisode',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Episode Number',
      name: 'episodeNumber',
      type: 'number'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: doc => `ep-${doc.episodeNumber}-${doc.title}`
      }
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime'
    },
    {
      title: 'Guests',
      name: 'guest',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }]
    },
    {
      title: 'Status',
      name: 'status',
      type: 'string',
      options: {
        list: [
          { title: 'Planning', value: 'planning' },
          { title: 'Scheduled', value: 'scheduled' },
          { title: 'Aired', value: 'aired' }
        ]
      }
    },
    {
      title: 'Related Event',
      name: 'relatedEvent',
      type: 'reference',
      to: [{ type: 'event' }]
    }
  ]
}
