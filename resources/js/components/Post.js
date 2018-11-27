import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

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
        {this.state.data.map((post, i) => (
          <div className="card w-100 mt-5" key={i}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

if(document.getElementById('post')) {
  ReactDOM.render(<Post />, document.getElementById('post'))
}
