import React, {Component} from 'react'

class Post extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    const content = this.input.value.trim()

    this.props.newMessage(content)

    this.input.value = ""
  }

  render() {
    return (
      <div className="panel-group">
        <div className="panel panel-primary">
          <div className="panel-heading">Post a message</div>
          <div className="panel-body">
            <div className="form-group">
              <label>Message:</label>
              <textarea ref={(input) => {this.input = input}} id="message" type="text" className="form-control"></textarea>
            </div>
            <button id="submit" className="btn btn-default" onClick={this.handleSubmit}>Post to board</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
