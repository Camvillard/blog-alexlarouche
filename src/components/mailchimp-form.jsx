// external libs
import React from "react"
// import { graphql} from "gatsby";
import addToMailchimp from "gatsby-plugin-mailchimp"

// internal stuff

// helpers

// styles & assets
import "../styles/main.scss"

class MailchimpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      name: "",
    }
  }

  sayThanks = () => {
    const newsletter = document.getElementById("newsletter-container")
    newsletter.innerHTML = "<div id='newsletter-thanks'>merci !<div>"
  }

  handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(this.state.email, { LNAME: this.state.name }) // listFields are optional if you are only capturing the email address.
      .then(data => {
        this.sayThanks()
      })
      .catch(() => {})
  }

  handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id={this.props.id}>
        <input
          type="text"
          name="name"
          placeholder="prénom"
          onChange={this.handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="courriel"
          onChange={this.handleChange}
        />
        <button type="submit" className="btn-square">
          s'abonner aux articles
        </button>
      </form>
    )
  }
}

export default MailchimpForm
