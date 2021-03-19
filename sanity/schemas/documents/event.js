import { FaRegCalendarAlt as icon } from 'react-icons/fa';

export default {
  title: 'Event',
  name: 'event',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Synopsis',
      name: 'synopsis',

      type: 'blockContent',
    },
    {
      title: 'Video Link',
      name: 'videoUrl',
      type: 'url',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      title: 'Host(s)',
      name: 'host',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
    {
      title: 'Guests',
      name: 'guest',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
    },
    {
      title: 'Status',
      name: 'status',
      type: 'string',
      options: {
        list: [
          { title: 'Planning', value: 'planning' },
          { title: 'Scheduled', value: 'scheduled' },
          { title: 'Aired', value: 'aired' },
          { title: 'Reuse', value: 'reuse' },
        ],
      },
    },
    {
      title: 'Published Formats',
      name: 'format',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'format' }] }],
    },
    {
      title: 'Event Thumbnail',
      name: 'thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Publish Platform',
      name: 'publishPlatform',
      type: 'reference',
      to: [{ type: 'platform' }],
    },
    {
      title: 'Distribution Platforms',
      name: 'distributionPlatform',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'platform' }],
        },
      ],
    },
    {
      title: 'Tags',
      name: 'tag',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'topic' }, { type: 'framework' }],
        },
      ],
    },
  ],
};
