import React, { PureComponent } from 'react'
// import { connect } from 'react-redux'
import connect from '../hoc/connect'

export class Category extends PureComponent {

  componentDidMount() {
    
  }

  render() {
    const { counter } = this.props
    return (
      <div>
        <h1>category</h1>
        <h2>当前计数：{counter}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Category)