// require('dotenv').config();
const path = require('path');
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // starting the create page actions
  const createWpPosts = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
              wordpress_id
              content
              title
              slug
              date

              categories {
                name
                slug
              }

              acf {
                seo_tags
              }

              featured_media {
                id
                source_url
              }
            }
          }
        }
      }
    `)

    query.then(result => {
      if (result.errors) {
        console.error(results.errors)
        reject(result.error)
      }



      // grab the content pulled thanks to the graphql query
      const postEdges = result.data.allWordpressPost.edges

      // create a new static page for each one of the articles found
      postEdges.forEach(edge => {
        createPage({
          path: `/${edge.node.slug}`,
          component: path.resolve(`./src/templates/post.jsx`),
          // Data passed to context is available
          // in page queries as GraphQL variables.
          context: {
            id: edge.node.id,
            postId: edge.node.wordpress_id
          },
        })
      })
      resolve()
    }) // end of query.then
  }) // end of createWpPosts


  // starting the create page actions
  const createWpCategories = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressCategory {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
      }
    `)

    query.then(result => {
      if (result.errors) {
        console.error(results.errors)
        reject(result.error)
      }

      // grab the content pulled thanks to the graphql query
      const categoryEdges = result.data.allWordpressCategory.edges

      // create a new static page for each one of the articles found
      categoryEdges.forEach(edge => {
        createPage({
          path: `/categories/${edge.node.slug}`,
          component: path.resolve(`./src/templates/categorie.jsx`),
          // Data passed to context is available
          // in page queries as GraphQL variables.
          context: {
            id: edge.node.id,
          },
        })
      })
      resolve()
    }) // end of query.then
  }) // end of createWPCategories




  return Promise.all([createWpPosts, createWpCategories])
} // createPages


