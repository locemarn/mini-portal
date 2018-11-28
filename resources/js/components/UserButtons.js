import React, { Component } from 'react'
import axios from 'axios'

export default class UserButtons extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      access: 0
    }
  }
  
  
  handleClick = e => {
    const id = this.props.id
    axios.put('/api/users/'+id, this.state)
      .then(res => (
        this.setState({
          access: 1
        })
      ))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <a
          href='javascript:;'
          className='btn btn-success'
          id={this.props.id}
          onClick={this.handleClick}
        >Access</a> 
      </div>
    )
  }
}
