import React from 'react'
import Sample from "../Sample"
function Presentation({dataVerifyId}) {
    console.log("dataVerifyId", dataVerifyId.Role)
    const {FirstName} = dataVerifyId
    const {LastName} = dataVerifyId
    return (
        <div style={{padding:"100px" }}>
           
          <h1 >{dataVerifyId.FirstName}</h1>
          <h1>{dataVerifyId.LastName}</h1>
          <input type="text" value={FirstName} disabled={true}/>
          <Sample FirstName={FirstName}/>
        </div>
    )
}

export default Presentation
