import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Message from "./Message";
import Post from "./Post";
import uuid from "uuid";
import Sortascdec from "./Sortascdec";
import Sortoldnew from "./Sortoldnew";

//function to handle the search filter, called on messages.map
function searchingFor(term){
  return function(s){
    return s.text.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          id: uuid.v4(),
          text: "Hello 👋",
          likes: 1,
          timestamp: Date.now() },
        {
          id: uuid.v4(),
          text: "Why did the 🐔 cross the road? To get to the otherside!",
          likes: 9,
          timestamp: Date.now() },
        {
          id: uuid.v4(),
          text: "Hi Mum!",
          likes: 6,
          timestamp: Date.now() },
        {
          id: uuid.v4(),
          text: "Where is my message?",
          likes: 4,
          timestamp: Date.now() }
      ],
      //search term state
      term: ''
    };
  }

  handleLike(id) {
    const message = this.state.messages.find(message => message.id === id);
    message.likes = message.likes + 1;

    this.setState({
      messages: this.state.messages
    });
  }

  handleDislike(id) {
    const message = this.state.messages.find(message => message.id === id);
    message.likes = message.likes - 1;

    this.setState({
      messages: this.state.messages
    });
  }

  handleDelete(id) {
    const newMessages = this.state.messages.filter(
      message => message.id !== id
    );

    this.setState({
      messages: newMessages
    });
  }

  newMessage(content) {
    const message = {
      id: uuid.v4(),
      text: content,
      likes: 0,
      timestamp: Date.now()
    };

    if (content) {
      this.state.messages.push(message);
    } else {
      alert("Your message is empty, please enter some text and try again");
    }

    this.setState({
      messages: this.state.messages
    });
  }

  handleSortAsc() {
    var sortMessage = this.state.messages;

    sortMessage.sort(function(a, b) {
      return parseInt(a.likes, 10) - parseInt(b.likes, 10);
    });

    this.setState({
      messages: sortMessage
    });
  }

  handleSortDsc() {
    var sortMessage = this.state.messages;

    sortMessage.sort(function(a, b) {
      return parseInt(b.likes, 10) - parseInt(a.likes, 10);
    });

    this.setState({
      messages: sortMessage
    });
  }

  //Add new message to array to see sort new/old working
  handleSortOld() {
    var sortMessage = this.state.messages;

    sortMessage.sort(function(a, b) {
      return parseInt(a.timestamp, 10) - parseInt(b.timestamp, 10);
    });

    this.setState({
      messages: sortMessage
    });
  }

  //Add new message to array to see sort new/old working
  handleSortNew() {
    var sortMessage = this.state.messages;

    sortMessage.sort(function(a, b) {
      return parseInt(b.timestamp, 10) - parseInt(a.timestamp, 10);
    });

    this.setState({
      messages: sortMessage
    });
  }

  handleSearch(event) {
    this.setState({term: event.target.value})
  }

  render() {
    const {messages, term} = this.state
    return (
      <div className="App">
        <Header title={"Stephens Message Board"} />
        <div className="container">
          <Post newMessage={this.newMessage.bind(this)} />

          <div className="panel-group">
            <div className="panel panel-search">
              <input
                className="search-bar"
                type="text"
                value = {term}
                placeholder="Search for a message here..."
                onChange={this.handleSearch.bind(this)}
              />
            </div>
          </div>

          <div className="panel-group">
            <div className="panel panel-default">
              <div className="panel-align">
                <div className="panel-heading">
                  <span>Message Board</span>
                </div>
                <Sortascdec
                  onSortAsc={this.handleSortAsc.bind(this)}
                  onSortDsc={this.handleSortDsc.bind(this)}
                />
              </div>

              <div className="panel-body">
                <ul className="message-board">
                  {messages.filter(searchingFor(term)).map(message => {
                    return (
                      <Message
                        text={message.text}
                        key={message.id}
                        id={message.id}
                        likes={message.likes}
                        onLike={this.handleLike.bind(this)}
                        onDislike={this.handleDislike.bind(this)}
                        onDelete={this.handleDelete.bind(this)}
                      />
                    );
                  })}
                </ul>
              </div>
              <div className="panel-align">
                <Sortoldnew
                  onSortNew={this.handleSortNew.bind(this)}
                  onSortOld={this.handleSortOld.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
