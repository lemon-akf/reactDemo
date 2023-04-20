
const store = require('./store');
const { changeNameAction, changeAgeAction } = require('./store/actionCreators');


store.dispatch(changeNameAction("curry"))

store.dispatch(changeAgeAction(25))