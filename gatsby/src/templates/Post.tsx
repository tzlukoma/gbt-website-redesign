import React from "react"
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import { displayLocalTimeZone } from "../utils/timeFormats"

export default function SinglePostPage({ data }) {

    const content = data.post._rawBody
    const categories = data.post.category
    const author = data?.post?.author?.name
    const title = data.post.title
    return (
        <div className="m-auto p-8 md:px-8 lg:px-20">
            <h1 className="text-4xl text-center">{title}</h1>
            {author ? <h2 className="text-2xl text-center mt-0">{`by ${author}`}</h2> : null}
            <BlockContent blocks={content} className="prose lg:prose-xl m-auto" />
        </div>)
}

export const query = graphql`
    query($slug: String!){
        post: sanityPost(slug:{current:{eq:$slug}}) {
                slug {
                    current
                    }
                title
                author {
                    name
                }
                category {
                    name
                }
                _rawBody(resolveReferences: {maxDepth: 10})
            }
        }
`