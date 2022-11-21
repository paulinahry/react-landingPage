import { Routes, Route } from "react-router-dom"


//pages
import About from "./pages/About/About"
import Home from "./Home/Home"
import GetStarted from "./pages/GetStarted/GetStarted"
import Login from "./pages/Login/Login"
import Signup from "./pages/Login/Signup"


import './index.scss'
import Navigation from "./pages/Navigation/Navigation"
import { AuthContextProvider } from "./pages/context/AuthContext"

function App() {
  return (
    <div className="App w-16 md:w-32 lg:w-48" >
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
