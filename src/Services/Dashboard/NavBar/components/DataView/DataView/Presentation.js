import { TextField } from "@material-ui/core";
import React from "react";
import "../Styles/stylesDataView.css";

function Presentation({ dataVerifyId }) {
  console.log("dataVerifyId",dataVerifyId);

  return (
    <div style={{top:"10px"}}>
      <div className="body" >
        {/* <Checkout/> */}

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
              <h2>
                Branch : <i>{dataVerifyId.Branch}</i>
              </h2>

              <h2>
                Registration Number : <i>{dataVerifyId.RegNo} </i>
              </h2>
              <h2>
                Mobile Number :<i> {dataVerifyId.Mobile}</i>
              </h2>
              <h2>
                ParentOccupation :<i>{dataVerifyId.ParentOccupation }</i>
              </h2>
              <h2>
                Email : <i>{dataVerifyId.Email}</i>
              </h2>
              <h2>
                Address : <i>{dataVerifyId.Address}</i>
              </h2>
              {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="stroke" cx="60" cy="60" r="50"/>
    </svg>  */}
            </div>
          </div>

          <div div className="card">
            <h3 className="title">Academic details</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="circle">
              <h2>
                Backlogs : <i>{dataVerifyId.Backlogs}</i>
              </h2>
              <h2>
                TotalCredits : <i>{dataVerifyId.TotalCredits}</i>
              </h2>
              <h2>
                TotalFee:<i>{dataVerifyId.TotalFee}</i>
              </h2>
              <h2>
                PaidFee:<i>{dataVerifyId.PaidFee}</i>
              </h2>
              <h2>
                DueFee:<i>{dataVerifyId.DueFee}</i>
              </h2>
              <h2>
                LibraryFee:<i>{dataVerifyId.LibraryFee}</i>
              </h2>
              {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="stroke" cx="60" cy="60" r="50"/>
    </svg>  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
