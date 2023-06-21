import React from 'react';
import { graphql } from 'gatsby';
import ReactAudioPlayer from 'react-audio-player';
import BlockContent from '@sanity/block-content-to-react';
import Pager from '../components/Pager';
import { displayLocalTimeZone } from '../utils/timeFormats';
import TagPill from '../components/TagPill';
import { AppleBadge } from '../assets/images/AppleBadge';
import { GoogleBadge } from '../assets/images/GoogleBadge';
import { SpotifyBadge } from '../assets/images/SpotifyBadge';

const subscribeBadges = [
  {
    title: 'apple',
    src: 'https://podcasts.apple.com/us/podcast/set-4-life-conversations-with-george/id1623010784?itsct=podcast_box_link&itscg=30200&ls=1',
    component: <AppleBadge />,
  },
  {
    title: 'google',
    src: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xZDlmMzU5MC9wb2RjYXN0L3Jzcw==',
    component: <GoogleBadge />,
  },
  {
    title: 'spotify',
    src: 'https://open.spotify.com/show/6qr7sDhxEOFwat7Ibtbbrn',
    component: <SpotifyBadge />,
  },
];

interface RssPodcastEpisode {
  title: string;
  itunes: {
    episode: string;
    duration: number;
  };
  pubDate: string;
  link: string;
  isoDate: string;
  content: string;
  contentSnippet: string;
  enclosure: {
    url: string;
  };
}

interface SanityPodcastEpisode {
  category: { name: string }[];
  rssLink: string;
  _rawSynopsis: any;
}

const PodcastArchive = ({ data, pageContext }) => {
  const episodes: RssPodcastEpisode[] = data.allFeedS4LPodcast.nodes;
  const sanityEpisodes: SanityPodcastEpisode[] =
    data.allSanityPodcastEpisode.nodes;
  return (
    <div className="flex justify-center">
      <div className="m-auto p-8 md:px-8 lg:px-24">
        <h1> Podcast Episodes</h1>
        <div className="max-w-3xl">
          {episodes.map((episode) => {
            const summaryContent = sanityEpisodes.filter(
              (sanityEpisode) =>
                sanityEpisode.rssLink.toString().toUpperCase() ===
                episode.link.toString().toUpperCase(),
            );
            return (
              <div className="p-5 mb-10 bg-light-100 shadow-md">
                <div className="my-10">
                  <div>
                    <h2 className="text-3xl md:text-4xl m-0">
                      {`${
                        episode.itunes.episode == null
                          ? ''
                          : `Episode #${episode.itunes.episode}:`
                      } ${episode.title}`}
                    </h2>
                    <h3 className="text-2xl my-0 text-secondary-500">
                      {displayLocalTimeZone(episode.isoDate, 'MMM DD, YYYY')}
                    </h3>
                    {/* <h3 className="text-xl mt-0 mb-5">
                                                {`${Math.round(episode.itunes.duration / 60)} mins`}
                                            </h3> */}
                  </div>
                  <div className="flex my-5">
                    {summaryContent.length > 0
                      ? summaryContent[0].category.map((item) => {
                          return <TagPill tag={item.name} />;
                        })
                      : null}
                  </div>{' '}
                  {summaryContent.length > 0 ? (
                    <BlockContent
                      blocks={summaryContent[0]._rawSynopsis}
                      className="prose lg:prose-xl m-auto"
                    />
                  ) : null}
                  <ReactAudioPlayer
                    src={episode.enclosure.url}
                    controls
                    style={{ width: '100%' }}
                    className="mt-10"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <Pager pageContext={pageContext} />
      </div>
    </div>
  );
};

export default PodcastArchive;

export const query = graphql`query ($skip: Int!, $limit: Int!) {
  allFeedS4LPodcast(sort: {isoDate: DESC}, skip: $skip, limit: $limit) {
    nodes {
      title
      itunes {
        episode
        duration
      }
      pubDate
      link
      isoDate(locale: "")
      content
      contentSnippet
      enclosure {
        url
      }
    }
  }
  allSanityPodcastEpisode {
    nodes {
      category {
        name
      }
      rssLink
      _rawSynopsis
    }
  }
}`;
