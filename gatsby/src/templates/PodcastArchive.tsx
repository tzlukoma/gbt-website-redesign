import React from 'react'
import { graphql } from 'gatsby'
import ReactAudioPlayer from 'react-audio-player';
import BlockContent from '@sanity/block-content-to-react'
import Pager from "../components/Pager";
import { displayLocalTimeZone } from "../utils/timeFormats";

const PodcastArchive = ({ data, pageContext }) => {
    const episodes = data.allFeedS4LPodcast.nodes
    const sanityEpisodes = data.allSanityPodcastEpisode.nodes
    console.log({ sanityEpisodes })
    return (
        <div className="flex justify-center">
            <div className="m-auto p-8 md:px-8 lg:px-24">
                <h1> Podcast Episodes</h1>
                {/* <h2 className="text-2xl text-primary-500 my-0">{`(page ${pageContext.pageNumber} of ${pageContext.numberOfPages})`}</h2> */}
                <div className="max-w-3xl">
                    {
                        episodes.map(episode => {
                            const summaryContent = sanityEpisodes.filter(sanityEpisode => sanityEpisode.rssLink.toString().toUpperCase() === episode.link.toString().toUpperCase())
                            return (
                                <div className="p-5 mb-10 bg-light-100 shadow-md">
                                    <div className="my-10">
                                        <div >
                                            <h2 className="text-3xl md:text-4xl m-0">
                                                {`${episode.itunes.episode == null ? "" : `Episode #${episode.itunes.episode}:`} ${episode.title}`}
                                            </h2>
                                            <h3 className="text-2xl my-0 text-secondary-500">{displayLocalTimeZone(episode.isoDate, 'MMM DD, YYYY')}</h3>
                                            <h3 className="text-xl mt-0 mb-5">
                                                {`${Math.round(episode.itunes.duration / 60)} mins`}
                                            </h3>
                                        </div>
                                        {
                                            summaryContent.length > 0 ? <BlockContent blocks={summaryContent[0]._rawSynopsis} className="prose lg:prose-xl m-auto" /> : null
                                        }

                                        <ReactAudioPlayer
                                            src={episode.enclosure.url}
                                            controls
                                            style={{ width: "100%" }}
                                            className="mt-10"
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <Pager pageContext={pageContext} />
            </div>
        </div>
    )
}

export default PodcastArchive

export const query = graphql`
    query ($skip: Int!, $limit: Int!){
        allFeedS4LPodcast(
            sort: {fields: isoDate, order: DESC}
            skip:$skip
            limit: $limit) {
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
                        rssLink
                        _rawSynopsis
                    }
            }
        }
`