import React from "react"
import Img from 'gatsby-image';
import { graphql } from 'gatsby'
import { Link } from "gatsby";
import Pager from "../components/Pager";
import { displayLocalTimeZone } from "../utils/timeFormats";
import { PostPreview } from "../components/PostPreview";

export default function PostArchivePage({ data, pageContext }) {
    const posts = data.allSanityPost.nodes

    return (
        <div className="flex justify-center">
            <div className="m-auto p-8 md:px-8 lg:px-24">
                <h1>Blog Posts </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                    {
                        posts.map(post => {
                            return (
                                <PostPreview post={post} />
                            )
                        })
                    }
                </div>
                <div className="mt-5">
                    <Pager pageContext={pageContext} />
                </div>

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
                    category {
                        name
                    }
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