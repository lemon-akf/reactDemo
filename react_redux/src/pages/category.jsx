import React, { PureComponent } from 'react'
import { banners } from '../DS/banner'
import { connect } from 'react-redux'
import { fetchHomeMultidataAction } from '../store/home'

export class Category extends PureComponent {

  componentDidMount() {

    this.props.fetchHomeMultidata()

  }

  render() {
    const counter = this.props.counter
    return (
      <div>
        <h2>当前计数：{counter}</h2>
        <ul >
          {banners.map((item, index) => {
            return <li key={index}>{item.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultidata() {
    dispatch(fetchHomeMultidataAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)