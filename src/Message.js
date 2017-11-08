import React, {Component} from 'react'

class Message extends Component {
  constructor(props) {
    super(props)
  }

  handleThumbsUp() {
    this.props.onLike(this.props.id)
  }

  handleThumbsDown() {
    this.props.onDislike(this.props.id)
  }

  handleDelete() {
    this.props.onDelete(this.props.id)
  }

  render() {
    return(
      <li id={this.props.id} key={this.props.id}>
        {this.props.text}
        <i onClick = {this.handleDelete.bind(this)} className="fa fa-trash pull-right delete"></i>
        <i onClick = {this.handleThumbsDown.bind(this)} className="fa fa-thumbs-down pull-right"></i>
        <i onClick = {this.handleThumbsUp.bind(this)} className="fa fa-thumbs-up pull-right"></i>
        <div className="pull-right">{this.props.likes}</div>
      </li>
    )
  }
}

export default Message
