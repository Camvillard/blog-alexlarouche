// external stulibsff
import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby"
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
      <div className="footer-left-section">
        <Link to="/contact">contact</Link>
        <p>© {new Date().getFullYear()} {data.site.siteMetadata.title} </p>
      </div>
      <div className="footer-right-section">
        <p>
          design & développement faits avec <FaHeart /> par
          <a href="https://www.cdltbisou.com"> <strong>cdlt</strong>bisou</a>
        </p>
        <div className="right-links">
          <Link to="/mentions-legales">mentions légales</Link> ∙ <Link to="/politique-confidentialite">politique de confidentialité</Link>
        </div>

      </div>
      </footer>
    )}
  />
)





