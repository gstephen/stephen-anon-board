import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Message from './Message'
import Post from './Post'
import uuid from 'uuid'
import Sortascdec from './Sortascdec'
import Sortoldnew from './Sortoldnew'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [
        { id: uuid.v4(), text: "Hello 👋", likes: 1, timestamp: Date.now() },
        { id: uuid.v4(), text: "Why did the 🐔 cross the road? To get to the otherside!", likes: 9, timestamp: Date.now() },
        { id: uuid.v4(), text: "Hi Mum!", likes: 6, timestamp: Date.now() },
        { id: uuid.v4(), text: "Where is my message?", likes: 4, timestamp: Date.now() }
      ]
    }
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.newMessage = this.newMessage.bind(this);
    this.handleSortAsc = this.handleSortAsc.bind(this);
    this.handleSortDsc = this.handleSortDsc.bind(this);
    this.handleSortNew = this.handleSortNew.bind(this);
    this.handleSortOld = this.handleSortOld.bind(this);
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

  newMessage(content) {
    const message = { id: uuid.v4(), text: content, likes: 0, timestamp: Date.now() }

    if (content) {
      this.state.messages.push(message)
    } else {
      alert('Your message is empty, please enter some text and try again')
    }

    this.setState({
      messages: this.state.messages
    })
  }

  handleSortAsc() {
    var sortMessage = this.state.messages

    sortMessage.sort(function(a,b){
      return parseInt((a.likes), 10) - parseInt((b.likes), 10)
    })

    this.setState({
      messages : sortMessage
    })
  }

  handleSortDsc() {
    var sortMessage = this.state.messages

    sortMessage.sort(function(a,b){
      return parseInt((b.likes), 10) - parseInt((a.likes), 10)
    })

    this.setState({
      messages : sortMessage
    })
  }

  handleSortOld() {
    var sortMessage = this.state.messages

    sortMessage.sort(function(a,b){
      return parseInt((a.timestamp), 10) - parseInt((b.timestamp), 10)
    })

    this.setState({
      messages : sortMessage
    })
  }

  handleSortNew() {
    var sortMessage = this.state.messages

    sortMessage.sort(function(a,b){
      return parseInt((b.timestamp), 10) - parseInt((a.timestamp), 10)
    })

    this.setState({
      messages : sortMessage
    })
  }

  render() {
    return (
    <div className="App">
    <Header title={"Stephens Message Board"} />
    <div className="container">
      <Post newMessage={this.newMessage} />

      <div className="panel-group">
        <div className="panel panel-default">
          <div className="panel-align">
            <div className="panel-heading"><span>Message Board</span></div>
            <Sortascdec
              onSortAsc={this.handleSortAsc}
              onSortDsc={this.handleSortDsc}
             />
          </div>

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
          <div className="panel-align">
            <Sortoldnew
              onSortNew={this.handleSortNew}
              onSortOld={this.handleSortOld}
             />
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default App
