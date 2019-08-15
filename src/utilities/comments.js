const getToken = () => {
  const fetch = require('isomorphic-fetch')
  typeof window !== 'undefined' && window.fetch('https://content.alexandralarouche.ca/wp-json/jwt-auth/v1/token', {
    method: 'POST',
    body: JSON.stringify( {
            // Username of a user on the WordPress website in which the REST API request
            // is being made to.
            username: process.env.JWT_USER,
            // And the above user's password.
            password: process.env.JWT_PASSWORD
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
}

const getCookie = () => {
  const fetch = require('isomorphic-fetch')
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

export { getToken, getCookie };

