// external libs
import React from "react";
// import { graphql, Link } from "gatsby";

// internal stuff


// helpers
import { getCookie } from "../utilities/comments"


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

  showMessage = (message) => {
    const validation = document.getElementById('comment-validation')
    console.log(message)
    validation.innerHTML = message
  };

  clearForm = () => {
    const form = document.querySelector('#post-comment-form')
    console.log(form)
    form.reset()
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const cookies = getCookie()
    const token = cookies.get('token')
    console.log('token', token)
    console.log(this.state)
    typeof window !== 'undefined' && window.fetch('https://content.alexandralarouche.ca/wp-json/wp/v2/comments', {
      method: 'POST',
      body: JSON.stringify( {
                author_email: this.state.email,
                author_name: this.state.name,
                author_url: this.state.website,
                content: this.state.comment,
                post: this.props.post_id
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(res => {
      if (res.message) {
        this.showMessage(res.message)
      } else {
      this.showMessage("votre commentaire est en attente de validation, il s'affichera sous peu!")
      }
    })
    this.clearForm()
    // this.showMessage(message)
  }

  render(){
    return(
    <div id="comment-form-container">
      <form action="/" id="post-comment-form" onSubmit={this.handleSubmit}>

        <label htmlFor="firstName">nom :
          <input type="text" name="name" onChange={this.handleChange}/>
        </label>

        <label htmlFor="websiteUrl">site web :
          <input type="url" name="website" onChange={this.handleChange}/>
        </label>

        <label htmlFor="emailAddress">adresse courriel (ne sera pas affichée) :
          <input type="email" name="email" onChange={this.handleChange}/>
        </label>

        <label htmlFor="commentContent">commentaire :
          <textarea type="textarea" name="comment" rows="12" cols="33" onChange={this.handleChange}/>
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
