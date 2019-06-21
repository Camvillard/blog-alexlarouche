const queries = require("./src/utilities/algolia")

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `alexandra larouche`,
    description: `Alexandra Larouche | lifestyle, beauté, mode, famille`,
    author: `camilevillard | cdltbisou`,
    seo: ['alexandra larouche', 'beauté', 'lifestyle', 'youtube', 'québec']
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // sass styles
    `gatsby-plugin-sass`,
    {
     resolve: `gatsby-source-wordpress`,
     options: {
       baseUrl: 'content.alexandralarouche.ca',
       protocol: 'https',
       hostingWPCOM: false,
       useACF: true,
       verboseOutput: true,
       auth: {
         wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
         wpcom_app_clientId: process.env.WORDPRESS_CLIENT_ID,
         wpcom_user: process.env.WORDPRESS_USER,
         wpcom_pass: process.env.WORDPRESS_PASSWORD,
       },
       includedRoutes: [
         "**/categories",
         "**/posts",
         "**/pages",
         "**/comments",
         "**/favoris",
         "**/media",
       ],
      },
    },
    // {
    //   resolve: `gatsby-source-youtube-v2`,
    //   options: {
    //     channelId: ['UCW2B_S8WqN2RZZ4j9NoIRLA'],
    //     apiKey: process.env.YOUTUBE_API_KEY,
    //     maxVideos: 2
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `alexandralarouche`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://gmail.us3.list-manage.com/subscribe/post?u=9978552546769cd4ebb279197&amp;id=908fed04bb'
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
     },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
