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
  ],
};
