import { configureStore } from "@reduxjs/toolkit"

import counterReducer from "./features/counter"

const store = configureStore({
  reducer:{
    counter:counterReducer
  }
})

export default store



// import { createStore,applyMiddleware,compose,combineReducers} from "redux"

// // import reducer from "./reducer"
// import thunk from "redux-thunk"

// // import counterReducer from './counter'
// // import homeReducer from './home'
// // import userReducer from './user'

// const reducer = combineReducers({
//     counter: counterReducer,
//     // home: homeReducer,
//     // user:userReducer
//   })


// // 通过 redux-thunk 中间件 可以让 dispatch 可以派发函数

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

// export default store
