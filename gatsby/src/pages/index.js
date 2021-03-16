import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

function HomePage () {
  return (
    <div className='m-0'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-light-500 p-6 mh-90vh'>
        <div className='container h-200'>
          <div className='bg-light-100 px-10 h-1/2 flex flex-col justify-center'>

              <h1 className="my-0">Live Life By Design.<br/><span className="text-4xl">Not By Default.</span></h1>

          </div>
          <div>
            <h2 className='text-2xl mt-5'>
              Sign up and get the first 3 chapters of The Wealth Cycle FREE
            </h2>
          </div>
          <div className='flex justify-evenly'>
            <form className='w-full'>
              <input
                type='text'
                name='name'
                placeHolder='Name'
                className='bg-white text-gray-800 mr-5 my-3 p-3 w-full text-xl'
              />
              <input
                type='text'
                name='email'
                placeHolder='Email'
                className='bg-white text-gray-800 mr-5 my-3 p-3 w-full text-xl'
              />
              <button
                type='submit'
                className='text-white bg-primary-500 font-serif mt-0 py-3 px-6 text-xl w-full mb-5'
              >
                Sign Up
              </button>
            </form>

            {/* <button className='text-white bg-primary-500 font-serif py-2 px-6 text-2xl'>
              Sign Up
            </button> */}
          </div>
        </div>
        <div className='h-full'>
          <StaticImage
            src='../local-assets/images/gbt-hero-image.png'
            alt='George sitting and teaching'
            placeholder='blurred'
            className='object-cover h-full '
          />
        </div>

        {/* <Img fluid={data.file.heroImage.fluid}/> */}
      </div>
    </div>
  )
}
export default HomePage

// export const query = graphql`
// query MyQuery {
//   file(relativePath: {eq: "images/gbt-hero-image.png"}) {
//     heroImage:childImageSharp {
//       fluid(maxHeight: 350, maxWidth: 600) {
// 				...GatsbyImageSharpFluid
//       }
//     }
//   }
// }

// `
