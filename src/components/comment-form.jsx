// external libs
import React from "react";
// import { graphql, Link } from "gatsby";

// internal stuff

// helpers


// styles & assets

class CommentForm extends React.Component {

  render(){
    return(
    <div id="comment-form-container">
      <form action="/" id="post-comment-form">

        <label htmlFor="firstName">nom :
          <input type="text" name="firstName"/>
        </label>

        <label htmlFor="websiteUrl">site web :
          <input type="url" name="firstName"/>
        </label>

        <label htmlFor="emailAddress">adresse courriel :
          <input type="email" name="firstName"/>
        </label>

        <label htmlFor="commentContent">commentaire :
          <textarea type="textarea" name="firstName"/>
        </label>

      </form>
    </div>
    )
  }
}

export default CommentForm;
