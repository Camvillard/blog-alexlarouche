// external libs
import React from "react";
import { graphql, Link } from "gatsby";

// internal stuff
import Layout from "../components/layout";
import SEO from "../components/seo";
import RegularPostCard from "../components/regular-post-card"

// helpers


// styles & assets
import '../styles/main.scss';


const NumberedLinks = props => {
  Array.from({length: props.pageCount + 1}, (v, k) => {
    if (k > 0) {
      return(
        <React.Fragment key={k}>
          {k === 1 ?
            <Link key={k} to={`/articles`}>{k}</Link> :
            <Link key={k} to={`/articles/${k}`}>{k}</Link>}
        </React.Fragment>
      )
    } else {
      return ''
    }
  })
}

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}


class ArticlesPage extends React.Component {

  componentDidMount() {
    const allImages = document.querySelectorAll('img')
    allImages.forEach( img => {
      img.addEventListener('contextmenu', e => {
        e.preventDefault()
        alert('le clic droit est désactivé pour les photos')
      })
    })
  }

  render() {
    const { group, index, first, last, pageCount } = this.props.pageContext
    const posts = group
    const previousUrl = index - 1 === 1 ? '/articles' : `/articles/${(index - 1).toString()}`
    const nextUrl = `/articles/${(index + 1).toString()}`
    const metadata = this.props.data.site.siteMetadata.seo
    return(
      <React.Fragment>
        <SEO title="archives" keywords={metadata}/>
        <Layout>


          <div className="page archives-page">

            <h1 className="page-title">archives</h1>

            <div className="container archives-container">

              {posts && (
                posts.map( post => {
                  return <RegularPostCard post={post.node} key={post.node.id} />
                })
              )}

            </div>

          </div>

          <div className="pagination-links">
            <div className="previous-link nav-link">
              <NavLink test={first} url={previousUrl} text="page précédente" />
            </div>
            <div className="number-links">
              <NumberedLinks pageCount={pageCount} />
            </div>
            <div className="next-link nav-link">
              <NavLink test={last} url={nextUrl} text="page suivante" />
            </div>
          </div>

        </Layout>
      </React.Fragment>
    )
  }
}

export default ArticlesPage

export const query = graphql`
query articlesPage {
  allWordpressPost(
  sort: {fields: [date], order: [DESC] }
  ) {
    edges {
      node {
        id
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
  site {
    siteMetadata {
      seo
    }
  }
}
`


