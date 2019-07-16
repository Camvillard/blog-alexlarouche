import React from "react";

// import { createComment } from "../utilities/comments"


class Test extends React.Component {

  handleClick = () => {
    console.log('hello')
    fetch('https://content.alexandralarouche.ca/wp-json/jwt-auth/v1/token', {
      method: 'POST',
      body: JSON.stringify( {
              // Username of a user on the WordPress website in which the REST API request
              // is being made to.
              username: 'camvillard',
              // And the above user's password.
              password: 'cdlTb!$0u201?AE'
          } ),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then( result => {
      document.cookie = `token=${result.token}`
      return document.cookie
    })
  };

  getCookie = () => {
    // initialize a map object to store the cookies
    // in an accessible way for later
    let cookiesObject = new Map()
    if (document.cookie) {
      const cookies = document.cookie
      // document.cookie is a string build with key/value pairs
      // assigned to each pther with = sign
      // and separated with ;
      const cookiesArray = cookies.split(';')
      // for each one of the elements of that array
      // we can store them in a new key/value pair in the map created
      cookiesArray.forEach( cookie => {
        cookiesObject.set(cookie.split('=')[0], cookie.split('=')[1] )
      })
    }
    return cookiesObject
  };

  sendComment = () => {
    const cookies = this.getCookie()
    const token = cookies.get(' token')
    fetch('https://content.alexandralarouche.ca/wp-json/wp/v2/comments', {
      method: 'POST',
      body: JSON.stringify( {
                author_email: 'test@example.com',
                author_name: 'Test via REST API',
                content: 'Test comment',
                post: 1
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))

  };


  render() {
    return(
      <div>test

      <div id="test-btn" onClick={this.handleClick}>
        <h3>
          bouton pout get le cookie
        </h3>
      </div>

      <div id="test-comment" onClick={this.sendComment}>
        <h3>
          bouton pout envoyer un commentaire
        </h3>
      </div>


      </div>
    )
  }
}

export default Test;
