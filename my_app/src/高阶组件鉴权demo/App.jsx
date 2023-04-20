import React, { PureComponent } from 'react'
import Detail from './pages/Detail'
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
        <div>
          <Detail></Detail>
        </div>
      </div>
    )
  }
}

export default App