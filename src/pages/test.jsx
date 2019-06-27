import React from "react";

// import { createComment } from "../utilities/comments"


class Test extends React.Component {

  handleClick = () => {
    console.log('hello')
    fetch('https://content.alexandralarouche.ca/wp-json/wp/v2/comments', {
      method: 'POST'
    })
    .then(response => response.json())
    .then( data => console.log(data))
  }


  render() {
    return(
      <div>test

      <div id="test-btn" onClick={this.handleClick}>
        ceci est le bouton qui sert de test
      </div>


      </div>
    )
  }
}

export default Test;
