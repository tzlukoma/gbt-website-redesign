// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `George B. Thompson`,
    siteUrl: 'https://awesome-pasteur-d0d080.netlify.app',
    description: 'Live your life by design.',
    twitter: '@georgebthompson',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: 'production',
        watchMode: true,
        // token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://anchor.fm/s/1d9f3590/podcast/rss`,
        name: `S4LPodcast`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            item: ['itunes:duration', 'itunes:episode'],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_GA_TRACKING_ID, // Google Analytics / GA
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     /*
    //      * The full URL of the WordPress site's GraphQL API.
    //      * Example : 'https://www.example-site.com/graphql'
    //      */
    //     url: `https://api.georgebthompson.com/graphql`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `localAssets`,
    //     path: `${__dirname}/src/local-assets/`,
    //   },
    // },
  ],
};
