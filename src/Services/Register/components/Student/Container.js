import React, { Component } from "react";
import Presentation from "./Presentation";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
export class Container extends Component {
  render() {
    const { peopleData } = this.props;
    console.log(peopleData);
    return (
      <div>
        <Presentation peopleData={peopleData}/>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.RegNo;
  console.log(state);
  console.log(id);
  const peoples = state.firestore.data.STUDENTS;
  const people = peoples ? peoples[id] : null;
  return {
    peopleData: people,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "STUDENTS",
    },
    {
      collection :"USERS"
    }
  ])
)(Container);
