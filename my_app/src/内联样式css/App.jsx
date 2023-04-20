import React, { PureComponent } from 'react'

import { BannerWapper } from './style'
export class App extends PureComponent {

  constructor (){
    super()
    this.state = {
      size: 50
    }
  }
  render() {
    const {size ,color } = this.state

    return (
        <BannerWapper  size={size} >
          <div className='title'>
            标题
          </div>
          <div className=' banner'>
          banner
          <div className='item'>item</div>
          </div>
        </BannerWapper>
    )
  }
}

export default App 