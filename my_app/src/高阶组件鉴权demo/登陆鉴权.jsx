import React, { PureComponent } from 'react'
import Cart from './pages/Cart'
export class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      // isLogin: false
    }
  }

  loginAuth(){
    localStorage.setItem('token','harry')
    this.forceUpdate()
  }
  exitsAuth(){
    localStorage.removeItem('token')
    this.forceUpdate()
  }
  render() {
    // const { isLogin } = this.state
    return (
      <div>
        <button onClick={()=> this.loginAuth()}>登陆</button>
        <button onClick={()=> this.exitsAuth()}>退出</button>
        <div>
        <Cart/>
        </div>
      </div>
    )
  }
}

export default App