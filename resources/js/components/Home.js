import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import HomePost from './HomePost'

export default class Home extends Component {

  constructor() {
    super()
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
        {this.state.data.map((post, i) => (
          <div className="card bg-light mt-3" key={i}>
            <div className="card-header"><h5>{post.title}</h5></div>
            <div className="card-body">
              <p className="card-text">{post.description}</p>
            </div>
            <div className="card-footer bg-transparent border-dark fot">
              <HomePost
                id={post.id}
                posts={post}
              />
              <div className="text-right">Created at: {post.created_at}</div>
              </div>
          </div>
        ))}
        <button className='btn btn-default mt-5 mb-5 center' onClick={this.loadMore.bind(this)}>More Results</button>
      </div>
    )
  }
}

if (document.getElementById('home')) {
  ReactDOM.render(<Home />, document.getElementById('home'))
}

