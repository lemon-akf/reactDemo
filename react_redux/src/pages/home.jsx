import React, { PureComponent } from 'react'

import { addNumber} from '../store/features/counter'
import { getBannerData } from '../store/features/home'
import { connect } from 'react-redux'

export class Home extends PureComponent {

  componentDidMount() {
    this.props.getBannerData()
  }
  

  render() {

    const { counter,banner } = this.props
    return (
      <div>home page
        <h1>当前计数：{counter}</h1>
        <button onClick={e => this.props.addNumber(1)}>+1</button>
        <button onClick={e => this.props.addNumber(5)}>+5</button>
        <button onClick={e => this.props.addNumber(10)}>+10</button>
        <ul >
          {banner.map((item, index) => {
            return <li key={index}>
              {item.title}
            </li>
          })}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banner: state.home.banner
})

const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => { dispatch(addNumber(num)) },
  getBannerData: () => { dispatch(getBannerData()) }


})

export default connect(mapStateToProps, mapDispatchToProps)(Home)