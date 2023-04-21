import * as actionTypes from './constants'

const initialState = {
  counter: 100,
  banners:[],
  recommends:[]
}

function reducer (state = initialState ,action){
  switch(action.type){
    case  actionTypes.ADD_NUM:
      return {...state,counter: state.counter + action.num}
    case actionTypes.SUB_NUM:
      return {...state,counter: state.counter - action.num}
    case actionTypes.CHANGE_BANNERS:
      return{...state,banners:action.banners}
    default:
      return state
  }

}

export default reducer