const { CHANGE_NAME, CHANGE_AGE } = require("./constants")


const initialState = {
  name: "harry",
  age: 24
}

function reducer(state = initialState,action){

  switch(action.type){
    case CHANGE_NAME:
    return {...state,name:action.name}
    case CHANGE_AGE:
      return  {...state,age:action.age}
    return state
  }

  return state
}


module.exports = reducer