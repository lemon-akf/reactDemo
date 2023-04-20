
const { CHANGE_NAME , CHANGE_AGE} =require("./constants")

const changeNameAction =(name) =>({
  type:CHANGE_NAME,
  name
})

const changeAgeAction =(age) =>({
  type:CHANGE_AGE,
  age
})

module.exports = {
  changeNameAction,
  changeAgeAction
}