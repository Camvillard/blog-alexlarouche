// external stulibsff
import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { FaHeart } from "react-icons/fa";

// internal stuff
import "../styles/main.scss";

// styles & assets

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <footer>
        <p>© {new Date().getFullYear()} {data.site.siteMetadata.title} <br/>
          fabriqué avec <FaHeart /> par
          <a href="https://www.cdltbisou.com"> <strong>cdlt</strong>bisou</a>
        </p>
      </footer>
    )}
  />
)





