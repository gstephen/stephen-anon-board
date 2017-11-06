import React, {Component} from 'react'

class Sort extends Component {
  constructor(props) {
    super(props)

    this.sortAsc = this.sortAsc.bind(this)
    this.sortDsc = this.sortDsc.bind(this)
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
        <span id="sortascending" onClick={this.sortAsc}>Sort ASC<i className="fa fa-angle-up" aria-hidden="true"></i></span>
        <span id="sortdescending" onClick={this.sortDsc}>Sort DSC<i className="fa fa-angle-down" aria-hidden="true"></i></span>
      </div>
    )
  }
}

export default Sort
