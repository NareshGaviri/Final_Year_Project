import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { createPeople } from '../../../../Register/middleware';
import Presentation from "./Presentation"

function Container(props) {
    const { createPeople, people } = props;
    console.log("people🎢🚀",people)
    useEffect(() => {
      createPeople();
    }, []);
    return (
      <div>
        {people ? (
          <div>
            <Presentation people={people}/>
          </div>
        ) : null}
      </div>
    );
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
