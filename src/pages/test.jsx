import React from "react";

// import { createComment } from "../utilities/comments"


class Test extends React.Component {

  handleClick = () => {

  }


  render() {
    return(
      <div>test

      <div onClick={this.handleClick}>
        <h3>
          bouton pout get le cookie
        </h3>
      </div>

      <div onClick={this.sendComment}>
        <h3>
          testing comment stuff
        </h3>
      </div>

      <div onClick={this.testingRequest}>
        <h3>
          testing request
        </h3>
      </div>


      </div>
    )
  }
}

export default Test;
