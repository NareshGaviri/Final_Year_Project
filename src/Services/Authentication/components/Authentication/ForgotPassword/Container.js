import React, { Component } from "react";
import Presentaton from "./Presentation";
import { auth } from "../../../../../config/fbConfig";
export class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;
    console.log(this.state);
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Email hs been send");
      })
      .catch((error) => {
        alert("There is no user corresponding to the email");
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Presentaton
          {...this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Container;
