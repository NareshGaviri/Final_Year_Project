import React from 'react'

function Sample(props) {
    console.log("props😅",props)
    return (
        <div>
            <h1>{props.FirstName}</h1>
        </div>
    )
}

export default Sample
