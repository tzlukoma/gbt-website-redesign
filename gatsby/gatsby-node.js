import path from 'path';
import { paginate } from 'gatsby-awesome-pagination';

async function turnEventsIntoVideoDetailPages({ graphql, actions }) {
  // 1. Get a template for this page
  const videoTemplate = path.resolve('./src/templates/VideoDetail.tsx');
  // 2. Query all events
  const { data } = await graphql(`
    query {
      events: allSanityEvent {
        nodes {
          title
          slug {
            current
          }
          videoUrl
        }
      }
    }
  `);

  // 3. Loop over each video event and create a page for that video

  // Filter for just events that have a video
  const videoEvents = data.events.nodes.filter(
    (event) => (event.videoUrl = !null),
  );

  // Loop through and create the pages
  videoEvents.forEach((event) => {
    console.log('creating a video detail page for ', event.title);
    actions.createPage({
      // What is the url for this new page
      path: `video/${event.slug.current}`,
      component: videoTemplate,
      context: {
        slug: event.slug.current,
      },
    });
  });
}

async function turnPostsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const postTemplate = path.resolve('./src/templates/Post.tsx');
  // 2. Query all posts
  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each post and create a page for that post
  data.posts.nodes.forEach((post) => {
    console.log('creating a post page for ', post.title);
    actions.createPage({
      // What is the url for this new page
      path: `${post.slug.current}`,
      component: postTemplate,
      context: {
        slug: post.slug.current,
      },
    });
  });
}

async function createBlogArchive({ graphql, actions }) {
  const { createPage } = actions;

  // const blogPost = path.resolve('./src/templates/Post.tsx')
  const { data } = await graphql(`
    query {
      posts: allSanityPost(sort: { fields: publishedAt, order: DESC }) {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);

  paginate({
    createPage,
    items: data.posts.nodes,
    itemsPerPage: 3,
    pathPrefix: '/posts',
    component: path.resolve('src/templates/PostArchive.tsx'),
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // 1. Posts
  await turnPostsIntoPages(params);
  // 2. Pages
  // 3. Podcasts
  // 4. Videos
  await turnEventsIntoVideoDetailPages(params);
  // 5. Blog Post Archive
  await createBlogArchive(params);
}
