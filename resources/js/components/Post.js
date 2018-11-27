import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import PostCard from './PostCard'

export default class Post extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    axios.get('/api/posts')
      .then(res => {
        this.setState({
          data: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <a href='/posts/create' className='btn btn-outline-primary'>Add New post</a>
        {this.state.data.map((post, i) => (
          <PostCard
            key={i}
            i={i}
            post={post}
            object={this}
          />
        ))}
      </div>
    )
  }
}

if(document.getElementById('post')) {
  ReactDOM.render(<Post />, document.getElementById('post'))
}
