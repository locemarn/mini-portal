import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import PostCard from './PostCard'

export default class Post extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      url: '/api/posts',
      pagination: []
    }
  }

  componentWillMount() {
    this.fetchPosts()
  }

  fetchPosts() {
    let $this = this
    axios.get(this.state.url)
      .then(res => {
        $this.setState({
          data: $this.state.data.length > 0 ? $this.state.data.concat(res.data.data) : res.data.data,
          url: res.data.next_page_url
        })
        $this.makePagination(res.data)
      })
      .catch(err => console.log(err))
  }

  loadMore() {
    this.setState({
      url: this.state.pagination.next_page_url
    })
    this.fetchPosts()
  }

  makePagination(data) {
    let pagination = {
      current_page: data.current_page,
      last_page: data.last_page,
      next_page_url: data.next_page_url,
      prev_page_url: data.prev_page_url
    }
    this.setState({
      pagination: pagination
    })
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
        <button className='btn btn-default mt-5 mb-5 center' onClick={this.loadMore.bind(this)}>More Results</button>
      </div>
    )
  }
}

if(document.getElementById('post')) {
  ReactDOM.render(<Post />, document.getElementById('post'))
}
