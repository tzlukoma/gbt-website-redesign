import React from 'react';
import ReactPlayer from 'react-player'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

function HomePage({
  data: {
    sanitySiteSettings: { heroImage },
  },
}) {

  const testPosts = [
    {
      title: 'Black History Makers - Freedom Riders (Part 2)',
      titleLink:
        'https://www.facebook.com/watch/live/?v=876464106511405&ref=external',
      platform: 'Mommy Needs a Break YouTube Channel',
      date: 'March 3, 2021',
      embed: 'https://www.youtube.com/embed/uoEifCrjX4I?start=2564',
      avatar:
        'https://yt3.ggpht.com/ytc/AAUvwnjwV3sWujBlO_jQdoEa4L_8KjnTsBBTzWk8zrc=s48-c-k-c0x00ffffff-no-rj',
      sourceURL: 'https://www.facebook.com/15843670046/videos/494563991546010'
    },
    {
      title: 'Honoring God in How We Handle Finances',
      titleLink:
        'https://www.facebook.com/watch/live/?v=876464106511405&ref=external',
      platform: 'The Worship Center with Van Moody',
      date: 'Feb 7, 2021',
      embed: 'https://www.youtube.com/embed/uoEifCrjX4I?start=2564',
      avatar:
        'https://yt3.ggpht.com/ytc/AAUvwnjMldvDwWKuGKf3zDcVbVenYx6b6ntURw6r2wDGKA=s48-c-k-c0x00ffffff-no-rj',
      sourceURL: 'https://youtu.be/eu8eyEQOovU?t=2560'
    },
  ]

  return (
    <>
      {/* ----Only visible on mobile devices */}
      <div className="md:hidden">
        <div className="-mt-2 p-5 max-w-6xl mx-auto">
          <h2 className="mt-0 mb-1 text-2xl text-center">What Did I Miss?</h2>
          <ul className='grid grid-cols-1 -mt-3 pt-5'>
            <li>
              <article className='overflow-hidden shadow-lg '>
                <div className='relative h-0 pb-fluid-video'>
                  <ReactPlayer
                    className='absolute top-0 left-0 w-full h-full'
                    width='100%'
                    height='100%'
                    url={
                      testPosts[0].sourceURL
                    }
                  />
                </div>
                <div className="p-3">
                  <h5 className="-mt-1 text-md text-left"><a
                    className='no-underline hover:underline text-black text-lg '
                    href={testPosts[0].titleLink || '#'}
                  >
                    {testPosts[0].title}
                  </a></h5>
                  <div className="grid grid-cols-3 p-3 -mt-3 bg-light-100">
                    <div className='col-start-1 col-span-2'>
                      <a
                        className='flex items-center no-underline hover:underline text-black'
                        href={testPosts[0].sourceURL || `https://georgebthompson.com`}
                      >
                        <img
                          alt='Placeholder'
                          className='block rounded-full h-8 w-8'
                          src={testPosts[0].avatar || '/set-4-life-logo.png'}
                        />
                        <p className='m-3 text-sm'>{testPosts[0].platform}</p>
                      </a>
                    </div>
                    <div className="col-start-3 mt-3 text-grey-darker text-sm text-right">{testPosts[0].date}</div>
                  </div>
                </div>
              </article>
            </li>
          </ul>

        </div>
        <div className="-mt-3 p-5 ">
          <h2 className="mt-0 text-2xl text-center">What's Next?</h2>
        </div>
      </div>
      {/* ----Only visible on mobile devices */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -mt-2 p-5 sm:p-8 lg:px-20 bg-light-500 max-h-full">
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
          <Img fluid={heroImage.asset.fluid} className="h-full" />
        </div>
      </div>

      {/* ----Hidden on mobile devices */}
      <div className="sm:hidden md:block md:px-8 lg:px-20">
        <div className="">
          <h2 className="mt-10 mb-2 text-4xl ">What Did I Miss?</h2>
          <ul className="grid grid-cols-2 gap-5 py-5">
            {
              testPosts.map(post => {
                return (

                  <li>
                    <article className='overflow-hidden shadow-lg '>
                      <div className='relative h-0 pb-fluid-video'>
                        <ReactPlayer
                          className='absolute top-0 left-0 w-full h-full'
                          width='100%'
                          height='100%'
                          url={
                            post.sourceURL
                          }
                        />
                      </div>
                      <div className="p-3 xl:p-5">
                        <h5 className="-mt-1 text-md text-left"><a
                          className='no-underline hover:underline text-black text-lg xl:text-xl 2xl:text-2xl '
                          href={post.titleLink || '#'}
                        >
                          {post.title}
                        </a></h5>
                        <div className="grid grid-cols-3 p-3 -mt-3 bg-light-100">
                          <div className='col-start-1 col-span-2'>
                            <a
                              className='flex items-center no-underline hover:underline text-black'
                              href={post.sourceURL || `https://georgebthompson.com`}
                            >
                              <img
                                alt='Placeholder'
                                className='block rounded-full h-8 w-8'
                                src={post.avatar || '/set-4-life-logo.png'}
                              />
                              <p className='m-3 text-sm xl:text-md 2xl:text-lg'>{post.platform}</p>
                            </a>
                          </div>
                          <div className="col-start-3 mt-3 text-grey-darker text-sm xl:text-md 2xl:text-lg text-right">{post.date}</div>
                        </div>
                      </div>
                    </article>
                  </li>

                )
              })
            }

          </ul>
          <div className="">
            <h2 className="mt-10 mb-2 text-4xl ">What's Next?</h2>
          </div>
        </div>

      </div>
      {/* ----Hidden on mobile devices */}
    </>
  );
}
export default HomePage;

export const query = graphql`
  query MyQuery {
    sanitySiteSettings {
      heroImage {
        asset {
          fluid(maxWidth: 900) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
