import React from 'react'
import Img from 'gatsby-image';
import { Link } from "gatsby";
import { displayLocalTimeZone } from "../utils/timeFormats";

const PodcastPreview = ({ post }) => {
    return (
        <div className="grid gap-1 grid-rows-1 bg-gray-50">

            <Link to={`/${post.slug.current}`}>
                <Img
                    fluid={
                        post.mainImage.asset.fluid
                    }
                    className="col-start-1 col-span-1 h-32 md:w-full object-cover"
                />
            </Link>

            <div className="px-5 h-16">
                <Link to={`/${post.slug.current}`}>
                    <h2 className="text-2xl md:text-lg m-0 my-2">{post.title.toUpperCase()}</h2>
                </Link>
            </div>
            <div className=" px-5">
                <h3 className="text-xl my-0 text-primary-300">{displayLocalTimeZone(post.publishedAt, 'MMM DD, YYYY')}</h3>
                <h3 className="text-lg mt-0 mb-5">
                    {post.author ? `by ${post.author?.name}` : "Feature"}
                </h3>
            </div>
            <div className="flex px-5 mb-2">
                {post.category.map(item => {
                    return (
                        <div>
                            <div className="mr-2 px-2 py-1 bg-gray-200">{item.name.toLowerCase()}</div>
                        </div>

                    )
                })}
            </div>


            <div >


            </div>
        </div>
    )
}

export default PodcastPreview