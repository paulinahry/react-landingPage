import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { FaFacebook }  from 'react-icons/fa'
import { SiGmail }  from 'react-icons/si'
import {UserAuth} from '../context/AuthContext'
import Signup  from './Signup'
import './login.scss'


function Login() {

  //context
  const {login, user} = UserAuth()
  const {googleSingup} = UserAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedin] = useState(true)
  const navigate = useNavigate()




  const handleGoogleSignup = async ()=> {
    try{
      await googleSingup();
      navigate('/getStarted')

    }catch(error){
      console.log(error);
    }
  } 

  // function handleGoogleSignup() {
  // googleSingup();
  // } 



  function handleLogIn(e){
    e.preventDefault()
    login(email,password)
    navigate('/getStarted')
    console.log('pw: ' , password,'@email: ',  email);
   
  }
  return (
    <>
      
       
        
        <div className='login-ctn-cover'>
            <form onSubmit={handleLogIn}>
              <h4>log in here </h4>
    
                <input 
                onChange={ (e) => setEmail(e.target.value)}
                type="text" 
                value={email}
                name="username" 
                id="username" 
                placeholder='username'/>
    
                <input 
                onChange={ (e) => setPassword(e.target.value)}
                value={password}
                type="password" 
                name="password" 
                id="password" 
                placeholder='password' />
                
              
              <button className='login-btn'>Login</button>
          
    
                <div className='alt-login'>
                  <button className="login-icon-btn">{<FaFacebook/>}</button>
                  <button 
                  onClick={handleGoogleSignup}
                  className="login-icon-btn">{<SiGmail />}</button>
                </div>
            <span> Don't have account? <Link to='/signup'>Register here</Link></span>
            </form>
            <br /> 
          </div>

        <Signup handleGoogleSignup={handleGoogleSignup}/>
      


        {/* if no acount then show Signup */}
        {/* link classname onclick tehn show Signup, otherwise, log in  */}
      
    
    </>
  )
}

export default Login


// 