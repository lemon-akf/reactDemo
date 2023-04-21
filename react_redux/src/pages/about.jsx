import React, { Component } from 'react'

import { connect } from "react-redux"
import { addActionNum, subActionNum } from '../store/actionCreators'
export class about extends Component {

  calcNumber(num, isAdd) {
    if (isAdd) {
      this.props.addNumber(num)
    } else {
      this.props.subNumber(num)
    }
  }

  render() {
    const { counter, banners } = this.props
    return (
      <div>
        <h2>About Page: {counter}</h2>
        <div>
          <button onClick={(e) => this.calcNumber(1, true)}>+1</button>
          <button onClick={(e) => this.calcNumber(8, true)}>+8</button>
          <button onClick={(e) => this.calcNumber(5, false)}>-5</button>
          <button onClick={(e) => this.calcNumber(7, false)}>-7</button>
        </div>
        <div>
          <ul>
            {banners.map((item, index) => {
              return <li key={index}>{item.title}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  banners: state.banners
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addNumber: (num) => {
      dispatch(addActionNum(num))
    },
    subNumber: (num) => {
      dispatch(subActionNum(num))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(about)