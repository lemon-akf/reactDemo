import React, { PureComponent } from 'react'
import axios from "axios"
import { banners } from '../DS/banner'
import { connect } from 'react-redux'
import { changeBanners } from '../store/actionCreators'

export class Category extends PureComponent {

  componentDidMount() {
    
    console.log('banner', banners)
    setTimeout(()=>{
      this.props.changeBanners(banners)
    },1000)

  }

  render() {
    const counter =  this.props.counter
    return (
      <div>
        <h2>当前计数：{counter}</h2>
        <ul >
          {banners.map((item,index)=>{
            return <li key={index}>{item.title}</li>
          })}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  changeBanners(banners) {
    dispatch(changeBanners(banners))
  },
})

export default connect(mapStateToProps,mapDispatchToProps)(Category)