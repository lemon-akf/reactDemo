
import * as actionTypes from "./constants"

export const addActionNum = (num)=>({
  type: actionTypes.ADD_NUM,
  num
})

export const subActionNum = (num)=>({
  type: actionTypes.SUB_NUM,
  num
})