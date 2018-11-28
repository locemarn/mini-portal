import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import UserButton from './UserButtons'

export default class User extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      user_id: '',
      access: 0
    }
  }

  componentDidMount() {
    let $this = this
    let id = this.props.id
    
    axios.get('/api/users')
      .then(res => {
        $this.setState({
          data: res.data,
          user_id: this.id
        })
      })
      .catch(err => console.log(err))
  }

  deleteUser(user) {
    console.log(user)

    var $this = this

    axios.delete('/api/users/'+ this.state.user)
      .then(res => {
        console.log(res)

        const newState = $this.state.data.slice()
        newState.splice(newState.indexOf(user), 1)
        $this.setState({
          data: newState
        })
      })
      .catch(err => console.log(err))
   
  }

  handleAccessChange(e) {
    this.setState({
      access: 1
    })
  }

  handleClick = e => {
    this.setState({
      access: 1
    })
    console.log(this.state)
  }
  

  render() {
    if (this.props.id === 5) {
      return (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">CPF</th>
                <th scope="col">Access</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((user, i) => (
                <tr key={i}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.cpf}</td>
                <td>{user.access ? <i className="far fa-check-circle btn btn-success"></i> : <i className="fas fa-times btn btn-danger"></i>}</td>
                
                <td>
                  <a 
                    href='javascript:;'
                    className='btn  btn-danger'
                    user={user.id}
                    key={i}
                    onClick={this.deleteUser.bind(this, this.props.user, this.props.object)}
                  >Delete</a>
                  
                    {user.access == 0
                      ?
                      <UserButton
                        id={user.id}
                        access={user.access}
                      />
                      : null}
                  
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    } else {
      return (
        <div>
          Nothigh to show yet
        </div>
      )
    }
    
  }
}

if (document.getElementById('user')) {
  var id = $("#user").data("id")
  ReactDOM.render(<User id={id} />, document.getElementById('user'))
}
