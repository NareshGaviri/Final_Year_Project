import React from 'react'
import DataView from "../DataView/DataView"
function Presentation({dataVerifyId}) {
    console.log("dataVerifyId", dataVerifyId.Role)
  
    return (
        <div style={{padding:"100px" }}>
       
        <DataView dataVerifyId={dataVerifyId}/>
        </div>
    )
}

export default Presentation
