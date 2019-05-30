require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `alexandra larouche`,
    description: `blog pour Alexandra Larouche`,
    author: `camilevillard | cdltbisou`,
    seo: ['camille villard', 'web', 'créa']
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
       baseUrl: process.env.WORDPRESS_BASE_URL,
       protocol: process.env.WORDPRESS_PROTOCOL,
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
         "**/tags",
         "**/media",
       ],
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
