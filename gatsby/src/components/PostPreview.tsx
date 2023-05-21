import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { displayLocalTimeZone } from '../utils/timeFormats';
import TagPill from './TagPill';
import { GatsbyImage } from 'gatsby-plugin-image';

interface Post {
  title: string;
  publishedAt: string;
  slug: { current: string };
  mainImage: any;
  category: Tag[];
  author: { name: string };
}
interface Tag {
  name: string;
}

interface PostPreviewProps {
  post: Post;
}

const PostPreview = ({ post }: PostPreviewProps) => {
  return (
    <div className="grid gap-1 grid-rows-1 bg-gray-50">
      <Link to={`/${post.slug.current}`}>
        <GatsbyImage
          image={post?.mainImage?.asset?.gatsbyImageData}
          className="col-start-1 col-span-1 h-32 md:w-full object-cover"
          alt="post's image"
        />
      </Link>

      <div className="px-5 h-16">
        <Link to={`/${post.slug.current}`}>
          <h2 className="text-2xl md:text-lg m-0 my-2">
            {post.title.toUpperCase()}
          </h2>
        </Link>
      </div>
      <div className=" px-5">
        <h3 className="text-xl my-0 text-primary-300">
          {displayLocalTimeZone(post.publishedAt, 'MMM DD, YYYY')}
        </h3>
        <h3 className="text-lg mt-0 mb-5">
          {post.author ? `by ${post.author?.name}` : 'Feature'}
        </h3>
      </div>
      <div className="flex px-5 mb-2">
        {post.category.map((item: Tag) => {
          return <TagPill tag={item.name} />;
        })}
      </div>

      <div></div>
    </div>
  );
};

export { PostPreview };
