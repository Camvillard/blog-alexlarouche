// external libs
import React from "react";
import { Link } from "gatsby";

// internal stuff
import Layout from "../components/layout";
import SEO from "../components/seo";
import meta from "../data/meta";


// styles & assets

class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }

  handleBlur = (e) => {
    console.log(e.target.name)
    // this.setState({
    //   [e.target.name]:  e.target.value
    // })
  }

  render() {

    return(
      <div id="contact-page">

        <h1 className="main-page-title">contact</h1>

        <form className="form-white">
          <div className="form-element">
            <input type="text" name="name" onBlur={this.handleBlur} className="form-name"/>
          </div>

          <div className="form-element">
            <input type="email" name="email" onBlur={this.handleBlur}/>
          </div>

          <div className="form-element">
            <input type="email" name="subject" onBlur={this.handleBlur}/>
          </div>

          <div className="form-element">
            <textarea name="message" id="" cols="30" rows="10"></textarea>
          </div>

        </form>

      </div>


    )
  }
}


export default ContactPage
