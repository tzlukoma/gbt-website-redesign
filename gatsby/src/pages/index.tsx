import React from 'react';
import ReactPlayer from 'react-player';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import SignUpForm from '../components/SignUpForm';
import { Event } from "../interfaces/Event"
import { displayLocalTimeZone } from '../utils/timeFormats';
import EventCard from '../components/EventCard';


function HomePage({ data }) {
  const events: Event[] = data.allSanityEvent.edges;
  const siteSettings = data.sanitySiteSettings;
  // Sort events chronologically
  const ascEvents = events.sort(function (a: any, b: any) {
    const firstItem: any = new Date(a.node.date)
    const secondItem: any = new Date(b.node.date)
    return firstItem - secondItem;
  });
  const scheduledEvents = ascEvents.filter(
    (event) => event.node.status == 'scheduled',
  ).slice(0, 3);
  // Sort events reverse chronologically
  const descEvents = events.sort(function (a: any, b: any) {
    const firstItem: any = new Date(a.node.date)
    const secondItem: any = new Date(b.node.date)
    return secondItem - firstItem;
  });

  const airedEvents = descEvents
    .filter((event) => event.node.status == 'aired' && event.node.videoUrl !== null)
    .slice(0, 6);
  const mobileAiredEvents = airedEvents.slice(0, 1);

  // TODO Remove YouTube title on embed

  return (

    <article>
      {/* --Visible on mobile-- START */}
      <div className="md:hidden">
        <div className="-mt-2 p-5 max-w-6xl mx-auto">
          <div className="flex">
            <h2 className="mt-0 mb-1 text-2xl text-center">What Did I Miss?</h2>
            <div className="mt-0 mb-0 px-5 text-base text-uppercase text-secondary-500 underline">
              <Link to="/archive/videos/">VIEW ALL</Link>
            </div>
          </div>

          <ul className="grid grid-cols-1 -mt-3 pt-5">
            <li>
              <article className="overflow-hidden shadow-lg">
                <div className="relative h-0 pb-fluid-video">
                  <a
                    href={mobileAiredEvents[0].node.videoUrl}
                    className="absolute top-0 left-0 w-full h-full"
                  >
                    <div className="relative">
                      <Img
                        className="absolute z-0 top-0 left-0 w-full h-full"
                        fluid={mobileAiredEvents[0].node.thumbnail.asset.fluid}
                      />
                      <div className="h-full w-full absolute z-10 inset-0  bg-black opacity-40 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                          height="24"
                          width="24"
                          className="m-auto mt-20"
                          stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>

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
                      {displayLocalTimeZone(mobileAiredEvents[0].node.date, 'MMM DD, YYYY')}
                    </div>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>
        <div className="-mt-3 p-5 ">
          {/* <h2 className="mt-0 text-2xl text-center">What's Next?</h2> */}
          <div className="flex mb-2">
            <h2 className="mt-0 mb-1 text-2xl text-center">What's Next</h2>
            <div className="mt-0 mb-0 px-5 text-base text-uppercase text-secondary-500 underline">
              <Link to="/schedule/">ALL EVENTS</Link>
            </div>
          </div>
          <EventCard event={scheduledEvents[0]} />

        </div>
      </div>
      {/* --Visible on mobile-- END */}
      {/* ---Always visible-- START */}
      <div className="block">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -mt-2 p-8 lg:px-20 xl:pt-12 2xl:pt-14 2xl:pb-0 bg-light-500 max-h-full">
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
              <SignUpForm title="Sign up and get the first 3 chapters of The Wealth Cycle FREE" />
            </div>

          </div>
          <div className="row-start-1 md:h-full">
            <Img
              fluid={siteSettings.heroImage.asset.fluid}
              className="h-full 2xl:h-5/6 hero-image"
            />
          </div>
        </div>
      </div>
      {/* --Always visible-- END */}
      {/* ---NOT Visible on mobile devices--- START */}
      <div className="hidden md:block">
        <div className=" md:px-8 lg:px-20">
          <div className="flex">
            <h2
              className="mt-10 mb-2 text-4xl ">What Did I Miss? </h2>
            <div
              className="mt-12 mb-0 px-5 text-base  text-secondary-500 underline">
              <Link to="/archive/videos/">VIEW ALL</Link>
            </div>
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
                        controls={true}
                        width="100%"
                        height="100%"
                        loading="lazy"
                        url={videoUrl}
                        config={{
                          youtube: {
                            embedOptions: { modestbranding: 1, autohide: 1, showinfo: 0, controls: 0 }
                          }
                        }}
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
          {/* <h2 className="mt-10 mb-2 text-4xl ">What's Next?</h2> */}
          <div className="flex mt-0 mb-2 ">
            <h2 className="mt-10 mb-2 text-4xl">What's Next</h2>
            <div className="mt-12 mb-0 px-5 text-base  text-secondary-500 underline">
              <Link to="/schedule/">ALL EVENTS</Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {scheduledEvents.map(event => {
              return <EventCard key={event.node.id} event={event} />
            })}
          </div>

        </div>
      </div>
      {/* ---Not Visible on mobile devices--- END */}
    </article>

  );
}
export default HomePage;

export const query = graphql`
  query IndexPageQuery {
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
          registerUrl
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
