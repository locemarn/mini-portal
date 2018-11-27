import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class CreatePost extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      user_id: 5
    }
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)

    axios.post('/api/posts', this.state)
      .then(res => {
        console.log(res)
      })
      .then(err => console.log(err))
    
  }
  

  render() {
    return (
      <div>
        <h2>Add New Post</h2>
        <form className='form-horizontal' onSubmit={this.handleSubmit.bind(this)}>
          <div className='form-group'>
            <label className='control-label col-sm-2' htmlFor='title'>Title:</label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='title'
                name='title'
                placeholder='Enter a title'
                value={this.state.title}
                onChange={this.handleTitleChange.bind(this)}
              />
            </div>
          </div>

          <div className='form-group'>
            <label className='control-label col-sm-2' htmlFor='title'>Title:</label>
            <div className='col-sm-10'>
              <textarea
                type='text'
                className='form-control'
                id='title'
                name='title'
                placeholder='Enter a title'
                value={this.state.description}
                onChange={this.handleDescriptionChange.bind(this)}
              />
            </div>
          </div>

          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-10'>
              <button type='submit' className='btn btn-primary'>Save</button>
              <a href='/' className='btn btn-outline-primary'>Return</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

if (document.getElementById('create-post')) {
  ReactDOM.render(<CreatePost />, document.getElementById('create-post'))
}
