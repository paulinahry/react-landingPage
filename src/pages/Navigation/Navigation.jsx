import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'
import NavElemets from './NavElemets'
import './navigation.scss'
import {UserAuth} from '../context/AuthContext'


function Navigation() {
  const {login, user, logout} = UserAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
    console.log('user logged out successfully')
}

  return (
  
    <nav className='main-navi-ctn'>
        <Link to='/'>
        <h4 className='omnireal-logo'>
            omnireal
        </h4>
        </Link>

        <div className="login-ctn">

          { 
          user ?
           <button 
           onClick={handleLogout}
           className='login-btn'>Log out</button>
          :

          <Link to='/login'>
              <button className='login-btn'>Log in</button>
          </Link>
          }
          
        </div>

        <BurgerMenu />


        <div className='nav-elements'>
          <NavElemets />
        </div>
    </nav>

  )
}

export default Navigation