import React from 'react'
import ReactPlayer from 'react-player';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Event } from '../../interfaces/Event'
import { displayLocalTimeZone } from '../../utils/timeFormats';

function videos({ data }) {
    console.log(data)
    const events: Event[] = data.allSanityEvent.edges;


    // Sort events reverse chronologically
    const descEvents = events.sort(function (a: any, b: any) {
        const firstItem: any = new Date(a.node.date)
        const secondItem: any = new Date(b.node.date)
        return secondItem - firstItem;
    });

    const airedEvents = descEvents
        .filter((event) => event.node.status == 'aired' && event.node.videoUrl !== null)

    const mobileAiredEvents = airedEvents
    return (
        <div className="p-3 md:p-10">
            <div>
                <h1 className="text-4xl text-center">Video Archive</h1>
                <h2 className="mt-0 text-2xl text-center">all past videos</h2>
                <article>
                    {/* --Visible on mobile-- START */}
                    <div className="md:hidden">
                        <div className="-mt-2 p-5 max-w-6xl mx-auto">
                            <ul className="grid grid-cols-1 -mt-3 pt-5">
                                {
                                    airedEvents.map(event => {
                                        const {
                                            id,
                                            date,
                                            publishPlatform,
                                            slug,
                                            title,
                                            videoUrl,
                                        } = event.node;
                                        return (

                                            <li>
                                                <article className="mb-3 overflow-hidden shadow-lg">
                                                    <div className="relative h-0 pb-fluid-video">
                                                        <a
                                                            href={event.node.videoUrl}
                                                            className="absolute top-0 left-0 w-full h-full"
                                                        >
                                                            <div className="relative">
                                                                <Img
                                                                    className="absolute z-0 top-0 left-0 w-full h-full"
                                                                    fluid={event.node.thumbnail.asset.fluid}
                                                                />
                                                                <div className="h-full w-full absolute z-10 inset-0  bg-black opacity-40 text-white">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                        height="24"
                                                                        width="24"
                                                                        className="m-auto mt-20"
                                                                        stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                    </svg>
                                                                </div>
                                                            </div>

                                                        </a>
                                                    </div>
                                                    <div className="p-3">
                                                        <h3 className="-mt-1 text-left">
                                                            <a
                                                                className="no-underline hover:underline text-black text-sm "
                                                                href={event.node.videoUrl || '#'}
                                                            >
                                                                {event.node.title}
                                                            </a>
                                                        </h3>
                                                        <div className="grid grid-cols-3 p-3 -mt-3 bg-light-100">
                                                            <div className="col-start-1 col-span-2">
                                                                <a
                                                                    className="flex items-center no-underline hover:underline text-black"
                                                                    href={'#' || `https://georgebthompson.com`}
                                                                >
                                                                    {/* TODO Add publish platform url */}
                                                                    {event.node.publishPlatform
                                                                        .platformImage ? (
                                                                        <Img
                                                                            fluid={
                                                                                event.node.publishPlatform
                                                                                    .platformImage.asset.fluid
                                                                            }
                                                                            className="block rounded-full h-8 w-8"
                                                                        />
                                                                    ) : (
                                                                        <img
                                                                            alt="Placeholder"
                                                                            className="block rounded-full h-8 w-8"
                                                                            src={'/set-4-life-logo.png'}
                                                                        />
                                                                    )}
                                                                    <p className="m-3 text-sm xl:text-md 2xl:text-lg">
                                                                        {event.node.publishPlatform.name}
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-start-3 mt-3 text-grey-darker text-sm text-right">
                                                                {displayLocalTimeZone(event.node.date, 'MMM DD, YYYY')}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </li>

                                        )
                                    })
                                }

                            </ul>
                        </div></div>


                    {/* --Visible on mobile-- END */}

                    {/* ---NOT Visible on mobile devices--- START */}
                    <div className="hidden md:block">
                        <div className=" md:px-8 lg:px-20">
                            <div className="flex">
                                <h2 className="mt-10 mb-2 text-4xl ">What Did I Miss? </h2><div className="mt-12 mb-0 px-5 text-base"><Link to="/archive/videos/">view all</Link></div>
                            </div>

                            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 py-5">
                                {airedEvents.map((event) => {
                                    const {
                                        id,
                                        date,
                                        publishPlatform,
                                        slug,
                                        title,
                                        videoUrl,
                                    } = event.node;
                                    return (
                                        <li key={id}>
                                            <article className="overflow-hidden shadow-lg ">
                                                <div className="relative h-0 pb-fluid-video">
                                                    <ReactPlayer
                                                        className="absolute top-0 left-0 w-full h-full"
                                                        width="100%"
                                                        height="100%"
                                                        loading="lazy"
                                                        url={videoUrl}
                                                    />
                                                </div>
                                                <div className="p-3 xl:p-5">
                                                    <h3 className="-mt-1 text-md text-left">
                                                        <a
                                                            className="no-underline hover:underline  text-black text-xs xl:text-sm 2xl:text-lg "
                                                            href={videoUrl || '#'}
                                                        >
                                                            {title}
                                                        </a>
                                                    </h3>
                                                    <div className="grid grid-cols-3 p-3 -mt-3 bg-light-100">
                                                        <div className="col-start-1 col-span-2">
                                                            <a
                                                                className="flex items-center no-underline hover:underline text-black"
                                                                href={'#' || `https://georgebthompson.com`}
                                                            >
                                                                {/* TODO Add publish platform url */}
                                                                {publishPlatform.platformImage ? (
                                                                    <Img
                                                                        fluid={
                                                                            publishPlatform.platformImage.asset.fluid
                                                                        }
                                                                        className="block rounded-full h-8 w-8"
                                                                    />
                                                                ) : (
                                                                    <img
                                                                        alt="Placeholder"
                                                                        className="block rounded-full h-8 w-8"
                                                                        src={'/set-4-life-logo.png'}
                                                                    />
                                                                )}
                                                                <p className="m-3 text-sm xl:text-md 2xl:text-lg">
                                                                    {publishPlatform.name}
                                                                </p>
                                                            </a>
                                                        </div>
                                                        <div className="col-start-3 mt-3 text-grey-darker text-sm xl:text-md 2xl:text-lg text-right">
                                                            {displayLocalTimeZone(date, 'MMM DD, YYYY')}
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </li>
                                    );
                                })}
                            </ul>

                        </div>
                        <div className=" md:px-8 lg:px-20">
                            <h2 className="mt-10 mb-2 text-4xl ">What's Next?</h2>
                            <div className="grid grid-cols-9 gap-2 pt-5">
                                <div className="col-span-1 p-2 text-center text-white bg-primary-500">
                                    <div className="text-lg ">
                                        Tue
              </div>
                                    <div className="text-4xl">
                                        06
              </div>
                                    <div className="text-lg">
                                        Apr
              </div>
                                    <div className="mt-2 text-lg">
                                        7:00 PM PST
              </div>
                                </div>
                                <div className="col-span-3 text-2xl p-5 bg-light-200">The State of the Union / Markets Update</div>
                                <div className="col-span-3 text-md p-5 bg-light-200">George examines the current economic climate and gives us a market update.</div>
                                <div className="col-span-2 text-md p-5 bg-light-200"> [icon] FCBC on Facebook</div>
                            </div>
                        </div>
                    </div>
                    {/* ---Not Visible on mobile devices--- END */}
                </article>

            </div>

        </div>
    )
}

export default videos

export const query = graphql`
  query videoArchiveQuery {
    allSanityEvent {
      edges {
        node {
          id
          title
          synopsis {
            children {
              text
            }
          }
          thumbnail {
            asset {
              fluid(maxWidth: 700) {
                ...GatsbySanityImageFluid
              }
            }
          }
          videoUrl
          publishPlatform {
            name
            platformImage {
              asset {
                fluid(maxWidth: 200) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          slug {
            current
          }
          date
          status
        }
      }
    }
  }
`;
