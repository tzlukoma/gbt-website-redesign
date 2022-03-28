import React from "react"
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react'

function BookPage({ data }) {
  console.log(data)
  const books = data.books.edges.sort((a, b) => (a.node.title > b.node.title) ? 1 : -1)
  console.log(books)

  return (
    <div className="m-auto p-8 md:px-8 lg:px-20">
      <h1 className="text-center">Books</h1>
      {
        books.map(book => {
          const content = book?.node?._rawOverview
          const title = book?.node?.title
          const shortTitle = book?.node?.shortTitle
          const authors = book?.node?.author
          const image = book?.node?.bookImage
          const url = book?.node?.whereToBuyUrl
          return (
            <div className="my-10 p-10 bg-gray-50 border-gray-100 border-solid border-2 sm:w-1/3 m-auto">
              <h1 className="text-2xl text-center">{title}</h1>
              <h2 className="mt-0 text-xl text-center">{`by ${authors.map(author => author.name)}`}</h2>
              <div className="max-w-sm mb-10 m-auto ">
                <div className="relative">
                  <Img
                    className="absolute z-0 top-0 left-0 w-full h-full"
                    fluid={image.asset.fluid}
                  />
                </div>
                <div className="text-center mt-10">
                  <a href={url} className="flex-shrink-0 bg-secondary-200 hover:bg-primary-600 border-secondary-200 rounded hover:border-primary-600 lg:text-lg border-4 text-primary-500 hover:text-white py-1 px-5 lg:px-10">
                    {`Buy ${shortTitle}`}
                  </a>
                </div>
              </div>

              <h2 className="mt-0 text-xl text-center">Overview</h2>
              <BlockContent blocks={content} className="prose m-auto" />
            </div>

          )
        })
      }

    </div>)
}

export default BookPage

export const query = graphql`
query BookPageQuery {
  books:allSanityBook {
    edges {
      node {
        title
        shortTitle
        author {
          name
        }
        bookImage {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
        _rawOverview
        whereToBuyUrl
      }
    }
  }
}
`