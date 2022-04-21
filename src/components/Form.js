import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      comments: '',
      topic: 'react',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('state', this.state)
  }

  render() {
    const { username, comments, topic } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={comments}
            name='comments'
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select name='topic' value={topic} onChange={this.handleChange}>
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='vue'>Vue</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
