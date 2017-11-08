import React, {Component} from 'react'

class Sortoldnew extends Component {
  constructor(props) {
    super(props)
  }

  sortNew() {
    this.props.onSortNew()
  }

  sortOld() {
    this.props.onSortOld()
  }

  render() {
    return (
      <div className ="sorting-newold">
        <span id="sortoldest" onClick={this.sortNew.bind(this)}>Sort New<i className="fa fa-angle-up" aria-hidden="true"></i></span>
        <span id="sortnewest" onClick={this.sortOld.bind(this)}>Sort Old<i className="fa fa-angle-down" aria-hidden="true"></i></span>
      </div>
    )
  }
}

export default Sortoldnew
