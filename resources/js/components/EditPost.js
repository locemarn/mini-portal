import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class EditPost extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      user_id: ''
    }
  }

  componentWillMount() {
    let id = this.props.id
    let userId = this.props.user_id
    console.log(this.props.user_id)

    axios.get('/api/posts/'+id)
      .then(res => {
        var post = res.data

        this.setState({
          title: post.title,
          description: post.description,
          user_id: post.user_id
        })
      })
      .catch(err => console.log(err))
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

    axios.post('/api/posts/'+id, this.state)
      .then(res => console.log(res))
      .then(err => console.log(err))
    
  }

  render() {
    return (
      <div>
        <h2>Edit Post</h2>
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
              <button type='submit' 
                 className='btn btn-primary'>Update</button>
              <a href='/home' className='btn btn-outline-primary'>Return</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

if (document.getElementById('edit-post')) {
  var id = $("#edit-post").data("id")
  ReactDOM.render(<EditPost id={id} />, document.getElementById('edit-post'))
}
