const queries = require("./src/utilities/search-algolia")


require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
          wpcom_app_clientSecret: process.env.GATSBY_WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: process.env.GATSBY_WORDPRESS_CLIENT_ID,
          wpcom_user: process.env.GATSBY_WORDPRESS_USER,
          wpcom_pass: process.env.GATSBY_WORDPRESS_PASSWORD,
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
          jwt_base_path: "/jwt-auth/v1/token",
         // if not using JWT to authenticate with WP' can uncomment those next lines
         // htaccess_user: process.env.HTACCESS_USER,
         // htaccess_pass: process.env.HTACCESS_PASS,
         // htaccess_sendImmediately: false,
       },
       cookies: {},
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
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['UCIhIjNXYBKJuoGstuB3-GHA', 'UCUCkH561i3VjDQPJrGdGFQQ'],
        apiKey: process.env.GATSBY_YOUTUBE_API_KEY,
        maxVideos: 40
      },
    },
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
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: 'Q814WW9ED5',
    //     apiKey: '4d1afbd31ffbfa868cc322e2d3696b38',
    //     queries,
    //     chunkSize: 10000, // default: 1000
    //   },
    //  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
