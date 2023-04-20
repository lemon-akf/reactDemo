const { createStore} = require('redux')
const reducer = require('./reducer')

const store = createStore(reducer)


store.subscribe( ()=>{
  console.log('订阅',store.getState());
})

module.exports = store