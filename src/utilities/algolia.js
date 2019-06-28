const postQuery = `{
  posts: allWordpressPost {
    edges {
      node {
        slug
        id
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
        slug
        id
        title
      }
    }
  }
}`


const favorisQuery = `{
  favoris: allWordpressWpFavoris {
    edges {
      node {
        slug
        title
        categories { name }
        acf { nom_marque }
      }
    }
  }

}`


const flatten = arr =>
  arr.map(({ node: { categories, slug, ...rest } }) => ({
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
  {
    query: favorisQuery,
    transformer: ({ data }) => flatten(data.favoris.edges),
    indexName: `Favoris`,
    settings,
  },
]

module.exports = queries
