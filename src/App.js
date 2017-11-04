import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Message from './Message'
import Post from './Post'
import uuid from 'uuid'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [
        { id: uuid.v4(), text: "Hello 👋", likes: 1 },
        { id: uuid.v4(), text: "Why did the 🐔 cross the road? To get to the otherside!", likes: 9 },
        { id: uuid.v4(), text: "Hi Mum!", likes: 6 },
        { id: uuid.v4(), text: "Where is my messsage?", likes: 4 }
      ]
    }
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleLike(id) {
    const message = this.state.messages.find(message => message.id === id)
      message.likes = message.likes + 1

      this.setState({
        messages: this.state.messages
    })
  }

  handleDislike(id) {
    const message = this.state.messages.find(message => message.id === id)
      message.likes = message.likes - 1

      this.setState({
        messages: this.state.messages
    })
  }

  handleDelete(id) {
    const newMessages = this.state.messages.filter(message => message.id !== id)

    this.setState({
      messages: newMessages
    })
  }

  newMessage(text) {
    const message = { id: uuid.v4(), text: text, likes: 0}

    this.state.messages.push(message)

    this.setState({
      messages: this.state.messages
    })
  }

  render() {
    return (
    <div className="App">
    <Header title={"Stephens Message Board"} />
    <div className="container">
      <Post
        newMessage={this.handleSubmit}
      />

      <div className="panel-group">
        <div className="panel panel-default">
          <div className="panel-heading">Message Board</div>
          <div className="panel-body">
            <ul className="message-board">
              {this.state.messages.map(message => {
                return (
                  <Message
                    text={message.text}
                    key={message.id}
                    id={message.id}
                    likes={message.likes}
                    onLike={this.handleLike}
                    onDislike={this.handleDislike}
                    onDelete={this.handleDelete}
                  />
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
