import React from "react";
import "../styles/styles.css"
function Presentation({ peopleData }) {
  console.log(peopleData);
  return (
    <div style={{ padding: "100px",marginLeft:"100px",position :"absolute" }}>
      {peopleData !== null ? (
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
              <i >{peopleData.FirstName}</i>
            </h2>
            <h2>
              LastName : <i>{peopleData.LastName}</i>
            </h2>
            <h2>Regestration Number : {peopleData.RegNo}</h2>
            <h2>Regestration Number : {peopleData.Address}</h2>
            {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="stroke" cx="60" cy="60" r="50"/>
    </svg>  */}
          </div>
        </div>
        </div>
      
      ) : (
        <div>Loading......</div>
      )}
    </div>
  );
}

export default Presentation;
