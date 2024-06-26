import React, { PureComponent } from 'react'
import "./style.css"
import store from "./store"
import Home from './pages/home'
import Profile from './pages/profile'
import About from './pages/about'
import Category from './pages/category'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: store.getState().counter.counter
    }
    
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({
        counter: state.counter.counter
      })
    })
  }
  render() {

    const { counter } = this.state
    return (
      <div>
        <h1>APP page</h1>
        <h2>当前记数: {counter}</h2>
        <div className='pages'>
          <Home></Home>
          <Profile></Profile>
          <About></About>
          <Category></Category>
        </div>
      </div>
    )
  }
}


export default App