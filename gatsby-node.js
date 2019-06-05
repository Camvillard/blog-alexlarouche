const path = require('path');

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
          },
        })
      })
      resolve()
    }) // end of query.then
  }) // end of createWpPosts


  // starting the create page actions
  const createWpPages = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressPage {
          edges {
            node {
              id
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
      const pageEdges = result.data.allWordpressPage.edges

      // create a new static page for each one of the articles found
      pageEdges.forEach(edge => {
        createPage({
          path: `/${edge.node.slug}`,
          component: path.resolve(`./src/templates/page.jsx`),
          // Data passed to context is available
          // in page queries as GraphQL variables.
          context: {
            id: edge.node.id,
          },
        })
      })
      resolve()
    }) // end of query.then
  }) // end of createWpPosts



  return Promise.all([createWpPosts, createWpPages])
} // createPages


