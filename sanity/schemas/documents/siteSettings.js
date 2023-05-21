import { FaHome as icon } from 'react-icons/fa';

export default {
  title: 'Global Site Settings',
  name: 'siteSettings',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'Title',
      type: 'string',
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'About George Image',
      name: 'aboutImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'About George Text',
      name: 'aboutText',

      type: 'blockContent',
    },
    {
      title: 'Struggling Text',
      name: 'strugglingText',
      type: 'blockContent',
    },
    {
      title: 'Steady Text',
      name: 'steadyText',
      type: 'blockContent',
    },
    {
      title: 'Solid Text',
      name: 'solidText',
      type: 'blockContent',
    },
    {
      title: 'Surplus Text',
      name: 'surplusText',
      type: 'blockContent',
    },
    {
      title: 'Service Text',
      name: 'serviceText',
      type: 'blockContent',
    },
  ],
};
