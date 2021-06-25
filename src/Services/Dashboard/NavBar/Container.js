import React from "react";
import Presentation from "./Presentation";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { _signOut } from "../../Authentication/middleware/index";
function Container(props) {
  const { _signOut, auth, usersData, people, collectionData } = props;
  console.log("collectionData",collectionData);
  
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
  console.log("state😀",state)
  const { auth } = state.firebase;
  console.log(state.firestore.data.STUDENTS);
  console.log(state.authenticate.auth.collectionData);
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
