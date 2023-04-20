
import React from "react"
import Header from "./c-cpns/Header"
import Main from "./c-cpns/Main"
import Footer from "./c-cpns/Footer"

class App extends React.Component{
  
  render(){
    return(
      <div>
        <Header></Header>
        <Main value={'aaa'}></Main>
        <Footer></Footer>
      </div>
    )
  }
}
export default App