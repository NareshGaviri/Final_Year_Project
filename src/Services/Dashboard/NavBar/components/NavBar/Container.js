import React, { useEffect, useState } from "react";
import Presentation from "./Presentation";
import { connect } from "react-redux";
import { compose } from "redux";
import SignIn from "../../../../Authentication/components/Authentication/SignIn";
import { firestoreConnect } from "react-redux-firebase";
import { _signOut } from "../../../../Authentication/middleware/index";
import { db } from "../../../../../config/fbConfig";

function Container(props) {

  const { _signOut, auth, usersData, people, collectionData } = props;

  return (
    <div>
      <Presentation
        auth={auth}
        _signOut={_signOut}
        people={people}
        usersData={usersData}
        collectionData={collectionData}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  const { auth } = state.firebase;
  return {
    auth: auth,
    people: state.firestore.data.STUDENTS,
    collectionData: state.authenticate.auth.collectionData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    _signOut: () => dispatch(_signOut()),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "STUDENTS" }])
)(Container);
