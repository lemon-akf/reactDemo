import React, { Component } from 'react'

import { connect } from "react-redux"
import { addNumber, subNumber } from "../store/features/counter"
import { changeBanner } from "../store/features/home"

export class about extends Component {

  calcNumber(num, isAdd) {
    if (isAdd) {
      this.props.addNumber(num)
    } else {
      this.props.subNumber(num)
    }
  }

  componentDidMount() {
    this.props.getBanners()
  }

  render() {
    const { counter, banner } = this.props
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
          <h2>轮播图:</h2>
          <ul>
            {banner.map((item, index) => {
              return <li key={index}>{item.title}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    banner: []
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addNumber: (num) => {
    dispatch(addNumber(num))
  },
  subNumber: (num) => {
    dispatch(subNumber(num))
  },
  getBanners: () => {
    dispatch(changeBanner())
  }
})

// connect() 返回值是一个高阶组件。 
// 把 store 里的state 以及 Dispatch 映射到 当前组件的 props 里，通过 this.props 即可拿到
export default connect(mapStateToProps, mapDispatchToProps)(about)