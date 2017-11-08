import React, {Component} from 'react'

class Sortascdec extends Component {
  constructor(props) {
    super(props)
  }

  sortAsc() {
    this.props.onSortAsc()
  }

  sortDsc() {
    this.props.onSortDsc()
  }

  render() {
    return (
      <div className ="sorting">
        <span id="sortascending" onClick={this.sortAsc.bind(this)}>Sort ASC<i className="fa fa-angle-up" aria-hidden="true"></i></span>
        <span id="sortdescending" onClick={this.sortDsc.bind(this)}>Sort DSC<i className="fa fa-angle-down" aria-hidden="true"></i></span>
      </div>
    )
  }
}

export default Sortascdec
