import { useState } from 'react'
import './App.css'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
function App() {


  //to be updated as per user
  const username = "Me"

  const [isLoggedIn , setIsLoggedIn] = useState(()=>{
    return localStorage.getItem('isLoggedIn') === "true"
  })
  //to view home page and to be deleted
  localStorage.setItem('isLoggedIn',true)

  return (
    <div>
      
      {
        isLoggedIn ? <Home username={username}/> : <Login/>
      }
      
    </div>
  )
}

export default App
