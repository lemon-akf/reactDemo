import classNames from 'classnames'
import React, { Component } from 'react'

export class app extends Component {
  constructor(){
    super()
    this.state = {

      isShow:false
    }
  }

  render() {
    const isShow = this.state
    return (
      <div>
        <h2>app</h2>
        <h2 className={`aaa ${isShow ? 'bbb':'ccc'}`} >
          isShow
        </h2>
        <h2 className={classNames("aaa",{ccc:isShow})}>bbb</h2>
        <h2 className={classNames(["aaa", { bbb: isShow, ccc: isShow }])}>嘻嘻嘻</h2>
      </div>
    )
  }
}

export default app