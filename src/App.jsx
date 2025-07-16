import { useState } from 'react'
import './App.css'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
function App() {



  const [isLoggedIn , setIsLoggedIn] = useState(()=>{
    return localStorage.getItem('isLoggedIn') === "true"
  })
 


  return (
    <div>
      
      {
        isLoggedIn ? <Home/> : <Login/>
      }
      
    </div>
  )
}

export default App
