import React from "react";

import { createComment } from "../utilities/comments"


class Test extends React.Component {

  handleClick = () => {
    console.log('hello')
    fetch('https://content.alexandralarouche.ca/wp-json/wp/v2/comments')
    .then(repsonse => repsonse.json())
    .then( data => console.log(data))
  }

  render() {
    return(
      <div>test

      <div className="bouton-test" onClick={this.handleClick}>
        ceci est le bouton qui sert de test
      </div>


      </div>
    )
  }
}

export default Test;
