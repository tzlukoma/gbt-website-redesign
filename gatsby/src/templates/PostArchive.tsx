import React from "react"
import Img from 'gatsby-image';
import { graphql } from 'gatsby'
import { Link } from "gatsby";
import Pager from "../components/Pager";
import { displayLocalTimeZone } from "../utils/timeFormats";

export default function PostArchivePage({ data, pageContext }) {
    const posts = data.allSanityPost.nodes

    return (
        <div className="flex justify-center">
            <div className="m-auto p-8 md:px-8 lg:px-24">
                <h1>Blog Posts </h1>
                {/* <h2 className="text-2xl text-primary-500 my-0">{`(page ${pageContext.pageNumber} of ${pageContext.numberOfPages})`}</h2> */}
                <div className="md:grid grid-cols-3 gap-10">
                    {
                        posts.map(post => {
                            return (
                                <div><div className="my-10">
                                    <div >
                                        <Link to={`/${post.slug.current}`}>
                                            <h2 className="text-3xl md:text-2xl underline m-0">{post.title}</h2>
                                        </Link>
                                        <h3 className="text-2xl my-0 text-primary-300">{displayLocalTimeZone(post.publishedAt, 'MMM DD, YYYY')}</h3>
                                        <h3 className="text-xl mt-0 mb-5">
                                            {post.author && `by ${post.author?.name}`}
                                        </h3></div>

                                    <div >
                                        <Img
                                            fluid={
                                                post.mainImage.asset.fluid
                                            }
                                            className="col-start-1 col-span-1 md:w-full"
                                        />

                                    </div>
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

export const query = graphql`
    query ($skip: Int!, $limit: Int!){
        allSanityPost(
            sort: {fields: publishedAt, order: DESC}
            skip:$skip
            limit: $limit) {
                nodes {
                    title
                    author {
                        name
                    }
                    slug {
                        current
                    }
                    publishedAt
                    mainImage {
                        asset {
                            fluid(maxWidth: 700) {
                                ...GatsbySanityImageFluid
                            }
                        }
                    }
                }
        }
    }
`