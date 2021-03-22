import React from 'react';
import ReactPlayer from 'react-player';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import dayjs from 'dayjs';

interface Event {
  node: {
    id: number,
    date: string,
    publishPlatform: {
      name: string,
      platformImage: {
        asset: {
          fluid: FluidObject
        }
      } | null,
    } | null,
    slug: {
      current: string
    },
    status: string,
    thumbnail: {
      asset: {
        fluid: FluidObject
      }
    } | null,
    title: string,
    synopsis: [{
      children: [
        {
          text: string
        }
      ]
    }],
    videoUrl: string | null,
  }
}

function HomePage({ data }) {
  const events: Event[] = data.allSanityEvent.edges;
  // Sort events by the date they occured; reverse chronologically
  events.sort(function (a: any, b: any) {
    const firstItem: any = new Date(a.node.date)
    const secondItem: any = new Date(b.node.date)
    return secondItem - firstItem;
  });
  const siteSettings = data.sanitySiteSettings;
  const airedEvents = events
    .filter((event) => event.node.status == 'aired')
    .slice(0, 2);
  const mobileAiredEvents = airedEvents.slice(0, 1);
  const scheduledEvents = events.filter(
    (event) => event.node.status == 'scheduled',
  );
  console.log(scheduledEvents)

  return (
    <article>
      {/* --Visible on mobile-- START */}
      <div className="md:hidden">
        <div className="-mt-2 p-5 max-w-6xl mx-auto">
          <h2 className="mt-0 mb-1 text-2xl text-center">What Did I Miss?</h2>

          <ul className="grid grid-cols-1 -mt-3 pt-5">
            <li>
              <article className="overflow-hidden shadow-lg">
                <div className="relative h-0 pb-fluid-video">
                  <a
                    href={mobileAiredEvents[0].node.videoUrl}
                    className="absolute top-0 left-0 w-full h-full"
                  >
                    <Img
                      fluid={mobileAiredEvents[0].node.thumbnail.asset.fluid}
                    />
                  </a>
                </div>
                <div className="p-3">
                  <h3 className="-mt-1 text-md text-left">
                    <a
                      className="no-underline hover:underline text-black text-lg "
                      href={mobileAiredEvents[0].node.videoUrl || '#'}
                    >
                      {mobileAiredEvents[0].node.title}
                    </a>
                  </h3>
                  <div className="grid grid-cols-3 p-3 -mt-3 bg-light-100">
                    <div className="col-start-1 col-span-2">
                      <a
                        className="flex items-center no-underline hover:underline text-black"
                        href={'#' || `https://georgebthompson.com`}
                      >
                        {/* TODO Add publish platform url */}
                        {mobileAiredEvents[0].node.publishPlatform
                          .platformImage ? (
                          <Img
                            fluid={
                              mobileAiredEvents[0].node.publishPlatform
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
                          {mobileAiredEvents[0].node.publishPlatform.name}
                        </p>
                      </a>
                    </div>
                    <div className="col-start-3 mt-3 text-grey-darker text-sm text-right">
                      {dayjs(mobileAiredEvents[0].node.date).format(
                        'MMMM DD, YYYY',
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>
        <div className="-mt-3 p-5 ">
          <h2 className="mt-0 text-2xl text-center">What's Next?</h2>
          <div className="grid grid-cols-2 gap-1">
            <div className="flex justify-evenly items-center col-span-1 text-center text-white bg-primary-500">
              <span className="text-lg ">
                {dayjs(scheduledEvents[0].node.date).format(
                  'ddd',
                )}
              </span>
              <span className="text-3xl">
                {dayjs(scheduledEvents[0].node.date).format(
                  'DD',
                )}
              </span>
              <span className="text-lg">
                {dayjs(scheduledEvents[0].node.date).format(
                  'MMM',
                )}
              </span>
            </div>
            <div className=" col-span-1 p-3 text-xl text-center text-white bg-primary-500">
              {`${dayjs(scheduledEvents[0].node.date).format(
                'h:mm a',
              )} PST`}
            </div>
            <div className="col-span-2 p-4 bg-light-200">
              <div className="text-xl ">{scheduledEvents[0].node.title}</div>
              <div className="text-md ">{scheduledEvents[0].node.synopsis[0].children[0].text}</div>
            </div>


          </div>
        </div>
      </div>
      {/* --Visible on mobile-- END */}
      {/* ---Always visible-- START */}
      <div className="block">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -mt-2 p-8 lg:px-20 bg-light-500 max-h-full">
          <div className="row-start-2 md:row-start-1 max-h-70 ">
            <div className="flex flex-col justify-center px-10 2xl:pt-12 2xl:pb-5 pt-6 xl:h-1/2 bg-light-100 ">
              <h1 className="text-4xl lg:text-5xl 2xl:text-7xl">
                Live Life By Design.
                <br />
                <span className="text-2xl lg:text-3xl 2xl:text-5xl">
                  Not By Default.
                </span>
              </h1>
            </div>
            <div>
              <h2 className="my-2 xl:my-4 2xl:my-6 p-1 text-xl xl:text-3xl 2xl:text-4xl leading-relaxed text-gray-600 ">
                Sign up and get the first 3 chapters of The Wealth Cycle FREE
              </h2>
            </div>
            <div className="flex justify-evenly">
              <form className="w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="mr-5 mb-3 p-3 bg-white text-gray-800 w-full xl:w-1/3 text-xl"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="mr-5 mb-3 p-3 bg-white text-gray-800 w-full xl:w-1/3 text-xl"
                />
                <button
                  type="submit"
                  className="text-white bg-primary-500 font-serif mt-0 py-3 px-6 text-xl w-full xl:w-1/4"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          <div className="row-start-1 md:h-full">
            <Img
              fluid={siteSettings.heroImage.asset.fluid}
              className="h-full"
            />
          </div>
        </div>
      </div>
      {/* --Always visible-- END */}
      {/* ---NOT Visible on mobile devices--- START */}
      <div className="hidden md:block">
        <div className=" md:px-8 lg:px-20">
          <h2 className="mt-10 mb-2 text-4xl ">What Did I Miss?</h2>
          <ul className="grid grid-cols-2 gap-5 py-5">
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
                          className="no-underline hover:underline text-black text-lg xl:text-xl 2xl:text-2xl "
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
                          {dayjs(date).format('MMMM DD, YYYY')}
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
  );
}
export default HomePage;

export const query = graphql`
  query MyQuery {
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
    sanitySiteSettings {
      heroImage {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
