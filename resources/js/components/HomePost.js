import React, { Component } from 'react'

export default class HomePost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  

  deletePost = e => {

    var posts = this.props.posts
    var id = this.props.id
    console.log(id)

    axios.delete('/api/posts/'+id)
      .then(res => {
        console.log(res)
        console.log(res.data)

        this.state.posts.slice()
        newState.splice(newState.indefOf(posts), 1)

        this.setState({
          posts: newState
        })
      })
      .then(err => console.log(err))
  }

  render() {
    console.log(this.props.user_id)
    return (
      <div>
        <a
          href='javascript:;'
          className='btn btn-danger'
          onClick={this.deletePost}
        >
          Delete
        </a>
        <a 
          href={"/posts/"+this.props.id+"/edit"}
          user_id={this.props.user_id}
          id={this.props.id}
          className='btn btn-outline-dark'>
          Edit
        </a>
      </div>
    )
  }
}
