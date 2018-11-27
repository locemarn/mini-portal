import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Post extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    let $this = this

    axios
  }
  

  render() {
    return (
      <div>
        <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Button</a>
          </div>
        </div>
      </div>
    )
  }
}

if(document.getElementById('post')) {
  ReactDOM.render(<Post />, document.getElementById('post'))
}
