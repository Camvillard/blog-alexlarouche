// external libs
import React from "react";
// import { graphql, Link } from "gatsby";

// internal stuff

// helpers


// styles & assets

class CommentForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      website: '',
      comment: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [`${e.target.name}`]: e.target.value
    })
  };


  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render(){
    return(
    <div id="comment-form-container">
      <form action="/" id="post-comment-form" onSubmit={this.handleSubmit}>

        <label htmlFor="firstName">nom :
          <input type="text" name="name" onChange={this.handleChange}/>
        </label>

        <label htmlFor="websiteUrl">site web :
          <input type="url" name="email" onChange={this.handleChange}/>
        </label>

        <label htmlFor="emailAddress">adresse courriel :
          <input type="email" name="website" onChange={this.handleChange}/>
        </label>

        <label htmlFor="commentContent">commentaire :
          <textarea type="textarea" name="comment" rows="5" cols="33" onChange={this.handleChange}/>
        </label>

        <div className="btn-block">
        <button type="submit" className="btn-square">envoyer le commentaire</button>
        </div>


      </form>
    </div>
    )
  }
}

export default CommentForm;
