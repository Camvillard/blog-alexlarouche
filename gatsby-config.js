require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    url: `https://www.alexandralarouche.ca`,
    title: `alexandra larouche`,
    description: `Alexandra Larouche | lifestyle, beauté, mode, famille`,
    author: `camilevillard | cdltbisou`,
    seo: ["alexandra larouche", "beauté", "lifestyle", "youtube", "québec"],
    image: `https://content.alexandralarouche.ca/wp-content/uploads/2019/08/Alexandra_L-50.jpg`,
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
        baseUrl: "content.alexandralarouche.ca",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: false,
        auth: {
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
          jwt_base_path: "/jwt-auth/v1/token",
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us3.list-manage.com/subscribe/post?u=9978552546769cd4ebb279197&amp;id=908fed04bb",
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
