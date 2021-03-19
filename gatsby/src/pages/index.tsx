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
      platform: 'Mummy Needs a Break YouTube Channel',
      date: 'March 3, 2021',
      embed: 'https://www.youtube.com/embed/uoEifCrjX4I?start=2564',
      avatar:
        'https://yt3.ggpht.com/ytc/AAUvwnjwV3sWujBlO_jQdoEa4L_8KjnTsBBTzWk8zrc=s48-c-k-c0x00ffffff-no-rj',
      sourceURL: 'https://www.facebook.com/15843670046/videos/494563991546010'
    },
    {
      title: 'Honoring God in How We Handle Finances',
      platform: 'The Worship Center with Van Moody',
      date: 'Feb 7, 2021',
      embed: 'https://www.youtube.com/embed/uoEifCrjX4I?start=2564',
      avatar:
        'https://yt3.ggpht.com/ytc/AAUvwnjMldvDwWKuGKf3zDcVbVenYx6b6ntURw6r2wDGKA=s48-c-k-c0x00ffffff-no-rj',
      sourceURL: 'https://www.youtube.com/channel/UCJUP5OtscrQ4Inal2ZnoH8A'
    },
    {
      title: 'Build Business Back Better',
      titleLink:
        'https://www.facebook.com/watch/live/?v=876464106511405&ref=external',
      platform: 'Set-4-Life',
      date: 'Feb 9, 2021',
      embed:
        'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFaithfulCentral%2Fvideos%2F876464106511405%2F&show_text=false'
    },
    {
      title: 'Live Life by Design',
      platform: 'Set-4-Life',
      date: 'Jan 26, 2021',
      embed: 'https://www.youtube.com/embed/HuCpQQP5B-E'
    },
    {
      title: 'Paycheck Protection Plan',
      platform: 'Set-4-Life',
      date: 'Jan 19, 2021',
      embed: 'https://www.youtube.com/embed/LShndWtF9g0'
    },
    {
      title: 'Goals for 2021, Vision in the Mist of a Pandemic',
      platform: 'Set-4-Life',
      date: 'Jan 12, 2021',
      embed: 'https://www.youtube.com/embed/1b5u38hmS3I'
    },
    {
      title: `California's Relief Grants Application Process`,
      platform: 'Set-4-Life',
      date: 'Jan 12, 2021',
      embed: 'https://www.youtube.com/embed/jRZmfWLxR_0'
    },
    {
      title: `Investing and Building Wealth for Your Family`,
      platform: 'Mummy Needs a Break',
      date: 'Dec 15, 2020',
      embed: 'https://www.youtube.com/embed/SDLYkJvcibs',
      avatar:
        'https://yt3.ggpht.com/ytc/AAUvwnjwV3sWujBlO_jQdoEa4L_8KjnTsBBTzWk8zrc=s48-c-k-c0x00ffffff-no-rj',
      sourceURL: 'https://www.youtube.com/channel/UCf-BxXOdE9AIJnwhT_Bf1pQ'
    }
  ]

  return (
    <>
      {/* ----Only visible on mobile devices */}
      <div className="sm:hidden lg:hidden">
        <div className="-mt-2 p-5 max-w-6xl mx-auto">
          <h1 className="mb-1 text-2xl text-center">What Did I Miss?</h1>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 -mt-3 pt-5'>
            <li>
              <article className='overflow-hidden shadow-lg '>
                <div className='relative pt-56'>
                  <ReactPlayer
                    className='absolute top-0 left-0'
                    width='100%'
                    height='100%'
                    url={
                      testPosts[0].sourceURL
                    }
                  />
                </div>

                <div className="p-3">
                  <h5 className="-mt-3 text-md text-left"><a
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
                      <a
                        className='no-underline text-grey-darker hover:text-red-dark'
                        href='#'
                      >
                        <span className='hidden'>Like</span>
                        <i className='fa fa-heart'></i>
                      </a>
                    </div>
                    <div className="col-start-3 mt-5 text-grey-darker text-sm text-right">{testPosts[0].date}</div>

                  </div>

                </div>
              </article>
            </li>
          </ul>
        </div>
        <div className="-mt-3 p-5 ">
          <h1 className="text-2xl text-center">What's Next?</h1>
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
      <div className="hidden ">
        <div className="p-5 sm:p-8 lg:px-20">These are the latest videos</div>
        <div className="p-5 sm:p-8 lg:px-20">These are the upcoming events</div>
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
