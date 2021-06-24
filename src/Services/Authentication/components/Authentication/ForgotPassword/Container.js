import React, { Component } from 'react'
import Presentaton from "./Presentation"
export class Container extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email :""
    }
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <Presentaton {...this.state} handleSubmit={this.handleSubmit}handleChange={this.handleChange}/>
      </div>
    )
  }
}

export default Container
