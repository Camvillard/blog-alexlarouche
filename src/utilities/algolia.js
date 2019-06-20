const postQuery = `{
  posts: allWordpressPost {
    edges {
      node {
        id
        content
        title
        categories {
          id
          name
        }
      }
    }
  }
}`

const pageQuery = `{
  pages: allWordpressPage {
    edges {
      node {
        id
        content
        title
      }
    }
  }
}`


const flatten = arr =>
  arr.map(({ node: { categories, ...rest } }) => ({
    ...categories,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.edges),
    indexName: `Pages`,
    settings,
  },
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
    settings,
  },
]

module.exports = queries
