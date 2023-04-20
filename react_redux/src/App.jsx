import React, { PureComponent } from 'react'
import Home from './pages/home'
import Profile from './pages/profile'
import "./style.css"
import store from "./store"

export class App extends PureComponent {
  constructor(){
    super()
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount(){
    store.subscribe(()=>{
      const state =  store.getState()
      this.setState({
        counter: state.counter
      })
    })
  }
  render() {

    const { counter } = this.state
    return (
      <div>
        <h2>当前记数: {counter}</h2>
        <div className='pages'>
        <Home></Home>
        <Profile></Profile>
        </div>
      </div>
    )
  }
}

export default App