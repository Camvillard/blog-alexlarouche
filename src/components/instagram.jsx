// external stulibsff
import React from 'react';
import { StaticQuery, graphql } from "gatsby"

// internal stuff
import "../styles/main.scss";

// styles & assets

const InstagramItem = (props) => {
  return(
    <img
      src={props.photo}
      alt="instagram alexandra larouche"
      className="instagram-item"
    />
  )

}

const Instagram = (props) => {
  const data = props.data.allInstaNode.edges
  return(
    <div id="instagram-footer">
      <h6>sur instagram</h6>
      <div className="instagram-photos">
        {data.map( edge => <InstagramItem
          photo={edge.node.original}
          key={edge.node.id} />
        )}
      </div>
      <div className="btn-square">
        <a href="https://instagram.com/alexandralarouche">@alexandralarouche</a>
      </div>
    </div>
  )
}

export default () => (
  <StaticQuery
    query= {graphql`
      query {
        allInstaNode(limit: 8) {
          edges {
            node {
              id
              original
            }
          }
        }
      }
    `}
    render={data => <Instagram data={data} />}
  />
)





