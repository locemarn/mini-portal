import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class PostCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  

  deletePost(post, object) {
    console.log(post)
    
    var $this = object

    axios.delete('/api/posts/'+post.id)
      .then(res => {
        console.log(res)

        const newState = $this.state.data.slice()
        newState.splice(newState.indexOf(post), 1)
        $this.setState({
          data: newState
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div className="card w-100 mt-5" key={this.props.i}>
            <div className="card-body">
              <h5 className="card-title">{this.props.post.title}</h5>
              <p className="card-text">{this.props.post.description}</p>
              <a href={"/posts/"+this.props.post.id+"/edit"} className='btn btn-sm btn-secondary'>Edit</a>
              <a 
                href='javascript:;'
                className='btn btn-sm btn-danger'
                onClick={
                  this.deletePost.bind(
                    this,
                    this.props.post,
                    this.props.object
                  )
                }
              >Delete</a>
              <small>{this.props.post.id}</small>
            </div>
          </div>
      </div>
    )
  }
}
