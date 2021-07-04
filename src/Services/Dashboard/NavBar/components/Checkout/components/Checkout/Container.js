import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFeesData } from "../../middleware";
import Presentation from "./Presentation";
import SignIn from "../../../../../../Authentication/components/Authentication/SignIn"
function Container(props) {
    const {collectionData,feesDetails,getFeesData} = props
    useEffect(()=>{
        if(collectionData.rollNumber){
            var id = collectionData.rollNumber 
            console.log(id)
            getFeesData(id)
        }else{
            <SignIn/>
        }
    },[])

  return (
    <div>
      <Presentation feesDetails={feesDetails}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    feesDetails: state.feesReducer.feesReducer.dataFees,
    collectionData: state.authenticate.auth.collectionData
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getFeesData: (id) => dispatch(getFeesData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
