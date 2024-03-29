
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { subNumber } from '../store/features/counter'

export class Profile extends PureComponent {

  // 当组件挂载到DOM中后会被调用
  componentDidMount() {
  }

  render() {

    const { counter } = this.props
    return (
      <div>
        profile
        <h1>当前计数：{counter}</h1>
        <button onClick={(e) => this.props.subNumber(1)} >-1</button>
        <button onClick={(e) => this.props.subNumber(5)} >-5</button>
        <button onClick={(e) => this.props.subNumber(10)} >-10</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({

  subNumber: (num) => { dispatch(subNumber(num)) }

})

export default connect(mapStateToProps,mapDispatchToProps)(Profile)