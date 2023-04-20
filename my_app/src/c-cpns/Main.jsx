import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProuderList from './MainProuderList'
export class main extends Component {
  render() {
    console.log('this.props', this.props)
    return (
      <div className='main'>
        <MainBanner></MainBanner>
        <MainProuderList></MainProuderList>
      </div>
    )
  }
}

export default main