import React, {Component} from 'react'

class Sort extends Component {
  constructor(props) {
    super(props)
  }

  sortNew() {
    this.props.onSortNew()
  }

  sortOld() {
    this.props.onSortOld()
  }

  sortAsc() {
    this.props.onSortAsc()
  }

  sortDsc() {
    this.props.onSortDsc()
  }

  render() {
    return (
      <div className ="sorting-hat">
        <span id="sortoldest" onClick={this.sortNew.bind(this)}>Sort New<i className="fa fa-angle-up" aria-hidden="true"></i></span>
        <span id="sortnewest" onClick={this.sortOld.bind(this)}>Sort Old<i className="fa fa-angle-down" aria-hidden="true"></i></span>
        <span id="sortascending" onClick={this.sortAsc.bind(this)}>Sort ASC<i className="fa fa-angle-up" aria-hidden="true"></i></span>
        <span id="sortdescending" onClick={this.sortDsc.bind(this)}>Sort DSC<i className="fa fa-angle-down" aria-hidden="true"></i></span>
      </div>
    )
  }
}

export default Sort
