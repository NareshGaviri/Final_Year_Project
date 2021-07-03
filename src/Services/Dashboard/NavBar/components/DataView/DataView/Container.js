import React from 'react'
import Presentation from "./Presentation"
function Container(props) {
    const {dataVerifyId} = props
    return (
        <div>
            <Presentation dataVerifyId={dataVerifyId}/>
        </div>
    )
}

export default Container
