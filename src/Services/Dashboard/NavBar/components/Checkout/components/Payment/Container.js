import React, { useState } from "react";
import Presentation from "./Presentation";
import Review from "../Review"
function Container(props) {
  const {
    step,
   
  } = props;
  switch (step) {
    case 1:
      return <Presentation {...props}/>
    case 2:
      return <Review {...props}/>
    default:
      return
  }
}

export default Container;
