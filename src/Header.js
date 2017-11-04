import React, {Component} from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <h1>{this.props.title}</h1>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
