import React, { Component } from "react";
import { logIn } from "../../../middleware/index";
import Presentation from "./Presentation";
import { connect } from "react-redux";
import { auth } from "../../../../../config/fbConfig";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
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
    if(this.props.authStatus!==null){
      
    }
    this.props.login(this.state);
  };

  render() {
    const { authStatus, authError, auth, signUp, authSignUp } = this.props;
    return (
      <div>
        
          <Presentation
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            authError={authError}
            auth={auth}
            signUp={signUp}
            authSignUp={authSignUp}
          />

      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log("line-37-container", state.firestore.data);
  const { auth } = state.firebase;
  return {
    authStatus: state.authenticate.auth.authStatus,
    authError: state.authenticate.auth.authError,
    collectionData: state.authenticate.auth.collectionData,
    auth: auth,
    signUp: state.authenticate.authSignUp.signUp,
    authSignUp: state.authenticate.auth.authSignUp,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => dispatch(logIn(creds)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "STUDENTS" }])
)(Container);
