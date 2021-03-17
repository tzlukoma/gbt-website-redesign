import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

function HomePage ({
  data: {
    sanitySiteSettings: { heroImage }
  }
}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 -mt-2 p-4 bg-light-500 max-h-full'>
      <div className='row-start-2 md:row-start-1 max-h-70 '>
        <div className='flex flex-col justify-center px-10 2xl:pt-12 2xl:pb-5 pt-6 xl:h-1/2 bg-light-100 '>
          <h1 className='text-4xl lg:text-5xl 2xl:text-7xl'>
            Live Life By Design.
            <br />
            <span className='text-2xl lg:text-3xl 2xl:text-5xl'>
              Not By Default.
            </span>
          </h1>
        </div>
        <div>
          <h2 className='my-2 xl:my-4 2xl:my-6 p-1 text-xl xl:text-3xl 2xl:text-4xl leading-relaxed text-gray-600 '>
            Sign up and get the first 3 chapters of The Wealth Cycle FREE
          </h2>
        </div>
        <div className='flex justify-evenly'>
          <form className='w-full'>
            <input
              type='text'
              name='name'
              placeHolder='Name'
              className='mr-5 mb-3 p-3 bg-white text-gray-800 w-full xl:w-1/3 text-xl'
            />
            <input
              type='text'
              name='email'
              placeHolder='Email'
              className='mr-5 mb-3 p-3 bg-white text-gray-800 w-full xl:w-1/3 text-xl'
            />
            <button
              type='submit'
              className='text-white bg-primary-500 font-serif mt-0 py-3 px-6 text-xl w-full xl:w-1/4'
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className='row-start-1 md:h-full'>
        <Img fluid={heroImage.asset.fluid} className='h-full' />
      </div>
    </div>
  )
}
export default HomePage

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
`
