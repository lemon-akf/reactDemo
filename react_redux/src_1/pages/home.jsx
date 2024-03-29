import React, { PureComponent } from 'react'

import store from '../store'
import { addActionNum } from '../store/counter'

export class home extends PureComponent {
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

  addChangeNum(num){
    store.dispatch(addActionNum(num))
  }
  render() {

    const { counter } = this.state
    return (
      <div>home page
        <h1>当前计数：{counter}</h1>
        <button onClick={ e =>this.addChangeNum(1) }>+1</button>
        <button onClick={ e =>this.addChangeNum(5) }>+5</button>
        <button onClick={ e =>this.addChangeNum(10) }>+10</button>
      </div>
    )
  }
}

export default home