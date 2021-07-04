import React from "react";
import "../Styles/stylesDataView.css";
function Presentation({ dataVerifyId }) {
  console.log(dataVerifyId);
  return (
    <div className="body" style={{ padding: "100px" }}>
      <div className="container">
        <div className="card">
          <h3 className="title">Personal Details</h3>
          <div className="bar">
            <div className="emptybar"></div> 
           <div className="filledbar"></div>
          </div>
          <div className="circle">
            <h2>
              FirstName :{" "}
              <i style={{ display: "underline" }}>{dataVerifyId.FirstName}</i>
            </h2>
            <h2>
              LastName : <i>{dataVerifyId.LastName}</i>
            </h2>
            <h2>Regestration Number : {dataVerifyId.RegNo}</h2>
            {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="stroke" cx="60" cy="60" r="50"/>
    </svg>  */}
          </div>
        </div>
        
        <div className="card">
          <h3 className="title">Acdamic details</h3>
          <div className="bar">
            <div className="emptybar"></div>
             <div className="filledbar"></div>
          </div>
          <div className="circle">
            <h2>
              Backlogs : <i>{dataVerifyId.Backlogs}</i>
            </h2>
            <h2>
              TotalCredts : <i>{dataVerifyId.TotalCredits}</i>
            </h2>
            {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="stroke" cx="60" cy="60" r="50"/>
    </svg>  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
