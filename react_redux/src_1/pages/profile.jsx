
import React, { PureComponent } from 'react'

import store from '../store'
import { subActionNum } from '../store/counter'

export class profile extends PureComponent {
  constructor(){
    super()
    this.state = {
      counter: store.getState().counter.counter
    }
  }

  componentDidMount(){
    store.subscribe(()=>{
      const state =  store.getState()
      this.setState({
        counter: state.counter.counter
      })
    })
  }
  subChangeNum(num){
    store.dispatch(subActionNum(num))
  }
  render() {

    const { counter } = this.state
    return (
      <div>
        profile
        <h1>当前计数：{counter}</h1>
        <button onClick={(e)=> this.subChangeNum(1)} >-1</button>
        <button onClick={(e)=> this.subChangeNum(5)} >-5</button>
        <button onClick={(e)=> this.subChangeNum(10)} >-10</button>
      </div>
    )
  }
}

export default profile