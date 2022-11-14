import React from 'react'
import {NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'

function NavElemets( {isMobile, closeMobileMenu}) {

  const animateForm = {opacity: 0, y:-40}
  const animateTo ={opacity: 1, y: 0}
  
  return (
        <div className='main-nav'>
            
            <ul initial={animateForm}
                    animate={animateTo} className='ul-main-nav'>

                {/* this props are closing the burger menu while user click, is going to another page position */}
                <motion.li 
                    initial={animateForm}
                    animate={animateTo}
                    transition={{delay: 0.05}}
                    onClick={()=> isMobile && closeMobileMenu() }><NavLink to='/'>Home</NavLink> </motion.li>
                
                <motion.li 
                    initial={animateForm}
                    animate={animateTo}
                    transition={{delay: 0.07}}
                    onClick={()=> isMobile && closeMobileMenu() }><NavLink to='/about'>About</NavLink> </motion.li>

                <motion.li
                    initial={animateForm}
                    animate={animateTo}
                    transition={{delay: 0.09}}
                    onClick={()=> isMobile && closeMobileMenu() }> <NavLink to='/getStarted'>Get Started</NavLink> </motion.li>
            </ul>
        </div>


  )
}

export default NavElemets