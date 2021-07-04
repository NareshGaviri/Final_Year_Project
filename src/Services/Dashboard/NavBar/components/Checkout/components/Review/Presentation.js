import { Button } from '@material-ui/core'
import React from 'react'

function Presentation({handleSubmit}) {
    return (
        <div>
            <h1>By Submitting Your Payment Will Be completed </h1>
            <Button onClick={handleSubmit} variant="contained" type="submit" color="primary">Submit</Button>
        </div>
    )
}

export default Presentation
