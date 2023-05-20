import { FaPodcast as icon } from 'react-icons/fa';
import MyAnchorPodcastString from '../../src/MyAnchorPodcastString';
import MyVideoString from '../../src/MyVideoString';

const isUniqueRSSLink = (rssLink, context) => {
  const { document } = context;

  const id = document._id.replace(/^drafts\./, '');

  const params = {
    draft: `drafts.${id}`,
    published: id,
    rssLink,
  };

  /* groq */
  const query = groq`!defined(*[
    _type == 'rssLink' &&
    !(_id in [$draft, $published]) &&
    name == $rssLink
  ][0]._id)`;

  return client.fetch(query, params);
};

export default {
  title: 'Podcast Episode',
  name: 'podcastEpisode',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Episode Number',
      name: 'episodeNumber',
      type: 'number',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: (doc) => `ep-${doc.episodeNumber}-${doc.title}`,
      },
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
    },
    {
      title: 'RSS Link',
      name: 'rssLink',
      type: 'string',
      // validation: (Rule) =>
      //   Rule.custom(async (value, context) => {
      //     const isUnique = await isUniqueRSSLink(value, context);
      //     if (!isUnique) return 'RSS Link is not unique';
      //     return true;
      //   }),
    },
    {
      title: 'Hosts',
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
      title: 'Video Link',
      name: 'videoUrl',
      type: 'url',
    },
    {
      title: 'Video Preview',
      name: 'video',
      type: 'string',
      components: {
        input: MyVideoString,
      },
    },
    {
      title: 'Audio Link',
      name: 'audioUrl',
      type: 'url',
    },
    {
      title: 'Podcast Preview',
      name: 'podcast',
      type: 'string',
      components: {
        input: MyAnchorPodcastString,
      },
    },
    {
      title: 'Synopsis',
      name: 'synopsis',
      type: 'blockContent',
    },
    {
      title: 'Transcript',
      name: 'transcript',
      type: 'blockContent',
    },
    {
      title: 'Categories',
      name: 'category',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'topic' } }],
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
        ],
      },
    },
    {
      title: 'Related Event',
      name: 'relatedEvent',
      type: 'reference',
      to: [{ type: 'event' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      episode: 'episodeNumber',
      audio: 'audioUrl',
      video: 'videoUrl',
    },
    prepare(selection) {
      const { episode, audio, video } = selection;
      let addendum = [`Episode ${episode}`];
      if (audio) addendum.push('audio');
      if (video) addendum.push('video');
      const addendumString = addendum.join().replace(/,/g, ' | ');
      return Object.assign({}, selection, {
        subtitle: episode && `${addendumString}`,
      });
    },
  },
};
