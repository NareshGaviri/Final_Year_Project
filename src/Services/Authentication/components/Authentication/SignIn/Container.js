import React, { Component } from "react";
import { logIn } from "../../../middleware/index";
import Presentation from "./Presentation";
import { connect } from "react-redux";
import {auth} from "../../../../../config/fbConfig"
export class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
      e.preventDefault();
     
      this.props.login(this.state);
      
  }; 
  
  render() {
    const { authStatus, authError, auth } = this.props;
    return (
      <div>
        <Presentation
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          authError={authError}
          auth={auth}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("line-37-container", state.authenticate.auth.authStatus);
  const { auth } = state.firebase;
  return {
    authStatus: state.authenticate.auth.authStatus,
    authError: state.authenticate.auth.authError,
    auth: auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => dispatch(logIn(creds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
