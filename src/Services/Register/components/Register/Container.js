import React, { useEffect } from "react";
import Presentation from "./Presentation";
import { connect } from "react-redux";
import { db } from "../../../../config/fbConfig";
import { createPeople } from "../../middleware";
import firebase from "../../../../config/fbConfig";
function Container(props) {
 const {people}= props
  useEffect(() => {
    props.createPeople();
  }, []);
 
  return (
    (people) ?
    <div>
      <Presentation people={people}/>
    </div> :null
  )
}
const mapStateToProps = (state) => {
  return {
    people: state.people.people.peopleData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPeople: () => dispatch(createPeople()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
