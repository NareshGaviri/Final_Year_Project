import React, { Component } from "react";
import Presentation from "./Presentations";
import { connect } from "react-redux";
import { signUp } from "../../../middleware/index";
import { auth } from "../../../../../config/fbConfig";
import { db } from "../../../../../config/fbConfig";
export class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      fName: "",
      lName: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
    console.log(this.state)
  };
  render() {
    const { signUp, authSignUp, auth } = this.props;
    return (
      <div>
        <Presentation
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          authSignUp={authSignUp}
          signUp={signUp}
          auth={auth}
        />
      </div>
    );
  }
}
const mapSateToProps = (state) => {
  const { auth } = state.firebase;
  console.log(state.authenticate.authSignUp.authSignUp);
  return {
    authSignUp: state.authenticate.authSignUp.authSignUp,
    signUp: state.authenticate.authSignUp.signUp,
    auth: auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user)),
  };
};
export default connect(mapSateToProps, mapDispatchToProps)(Container);
