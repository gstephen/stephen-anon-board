import React, {Component} from 'react'

class Post extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.newMessage(this.props.text)
  }

  render() {
    return (
      <div className="panel-group">
        <div className="panel panel-primary">
          <div className="panel-heading">Post a message</div>
          <div className="panel-body">
            <div className="form-group">
              <label>Message:</label>
              <textarea id="message" type="text" className="form-control"></textarea>
            </div>
            <button onClick={this.handleSubmit} id="submit" className="btn btn-default">Post to board</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
