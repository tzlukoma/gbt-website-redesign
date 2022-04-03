import React from "react"
import { graphql } from 'gatsby'

export default function PostArchivePage({ data, pageContext }) {

    console.log(data)

    return (
        <div className="m-auto p-8 md:px-8 lg:px-20">
            {/* <h1 className="text-4xl text-center">{title}</h1>
            <h2 className="text-2xl text-center my-0 text-primary-300">{displayLocalTimeZone(date, 'MMM DD, YYYY')}</h2>
            {author ? <h2 className="text-2xl text-center mt-0">{`by ${author}`}</h2> : null} */}
            {/* <BlockContent blocks={content} className="prose lg:prose-xl m-auto" /> */}
            This is the blogPost Archive page
        </div>)
}

export const query = graphql`
    query ($skip: Int!, $limit: Int!){
        allSanityPost(
            sort: {fields: publishedAt, order: DESC}
            skip:$skip
            limit: $limit) {
                nodes {
                    title
                    publishedAt
                }
        }
    }
`