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
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
      options: {
        dateFormat: 'dddd, DD MMM YYYY,',
        timeFormat: 'HH:mm a',
      },
      validation: (Rule) => Rule.required(),
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
      title: 'Registration Link',
      name: 'registerUrl',
      type: 'url',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Publish Platform',
      name: 'publishPlatform',
      type: 'reference',
      to: [{ type: 'platform' }],
      validation: (Rule) => Rule.required(),
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
