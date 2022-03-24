import path from 'path';

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
  console.log(data);
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

export async function createPages(params) {
  // Create pages dynamically
  // 1. Posts
  await turnPostsIntoPages(params);
  // 2. Pages
  // 3. Podcasts
}
