import React, { useState , useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { FaFacebook }  from 'react-icons/fa'
import { SiGmail }  from 'react-icons/si'
import {UserAuth} from '../context/AuthContext'

function Signup( {handleGoogleSignup}) {

  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [passwordRepeat, setPasswordRepeat] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
   

  //context:
  const {createUser} = UserAuth()

  const handleSubmit = async (e)=> {
    e.preventDefault()
    setError('')
    try{
      await createUser(email,password)
      navigate('/getStarted')
 
    }catch(e){
      setError(e.message)
      console.log(e.message);
    }
  }

  return (
    <>
    <div className='login-ctn-cover'>
        <form onSubmit={handleSubmit}>
          
        <h4> or create an account</h4>
        <input
            onChange={ (e) => setEmail(e.target.value)} 
            type="email" 
            name="email" 
            id="email" 
            placeholder='email'
            value={email}
            required/>

            <input 
            onChange={ (e) => setPassword(e.target.value)} 
            type="password" 
            name="password" 
            id="password" 
            placeholder='password'
            value={password}

             />

            {/* <input 
            onChange={ (e) => setPasswordRepeat(e.target.value)} 
            type="password" 
            name="passwordRepeat" 
            id="passwordRepeat" 
            value={passwordRepeat}
            placeholder='repeat password'
             /> */}
            
            <button className='login-btn'>Create account</button>

            <div className='alt-login'>
              <button 
              // onClick={handleFacebookSignin}
              className="login-icon-btn">{<FaFacebook/>}</button>
              <button 
              onClick={handleGoogleSignup}
              className="login-icon-btn">{<SiGmail />}</button>
            </div>
        <span> Already have account? <Link to='/login'>Log in</Link></span>
        </form>
      </div>
    

    </>
  )
}

export default Signup