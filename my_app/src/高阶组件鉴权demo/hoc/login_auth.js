function loginAuth(OrginComponent) {
  return props => {
    const token = localStorage.getItem('token')
    if(token){
      return <OrginComponent {...props} />
    }else{
      return <h2>请登录后查看</h2>
    }
    
  }
}

export default loginAuth 