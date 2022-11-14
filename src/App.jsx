import { Routes, Route } from "react-router-dom"


//components
import About from "./components/About/About"
import Home from "./Home/Home"
import GetStarted from "./components/GetStarted/GetStarted"
import Login from "./components/Login/Login"
import Signup from "./components/Login/Signup"


import './index.scss'
import Navigation from "./components/Navigation/Navigation"
import { AuthContextProvider } from "./components/context/AuthContext"

function App() {
  return (
    <div className="App">
      <AuthContextProvider >

      <header>
        <Navigation />
      </header>

      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path='/getStarted' element={<GetStarted/>}> </Route>
        <Route path='/login' element={<Login/>}>  </Route>
        <Route path='/signup' element={<Signup />}> </Route>
      </Routes>

    </AuthContextProvider>

    </div>
  )
}

export default App
