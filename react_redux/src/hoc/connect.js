
import React, { PureComponent } from 'react';

import store from '../store';

export default function connect(mapStateToProps, mapDispatchToProps) {
  // 返回一个高阶组件
  return function wrapWithConnect(WrappedComponent) {
    // 返回一个组件
    class NewComponent extends PureComponent {

      constructor(props) {
        super(props);
        this.state = mapStateToProps(store.getState());
      }

      componentDidMount() {
        // 订阅监听 state 变化 重新执行 render
        store.subscribe(() => {
          this.setState(mapStateToProps(store.getState()))
        })
      }
      render() {  
        const stateObj = mapStateToProps(store.getState());
        const dispatchObj = mapDispatchToProps(store.dispatch)
        return <WrappedComponent {...this.props} {...stateObj} {...dispatchObj} />
      }
    }
    return NewComponent
  }
}