import React , {useState} from 'react'
//components
import NavElemets from './NavElemets';
//icons
import {CgMenu, CgClose} from 'react-icons/cg'

function BurgerMenu() {
const [openMenu, setOpenMenu] = useState(false);
    
  const burgerMenuIcon = <CgMenu className='burger-menu-icon' onClick={ ()=> setOpenMenu(!openMenu)} />

  const closeBurgerMenu =<CgClose className='burger-menu-icon' onClick={ ()=> setOpenMenu(!openMenu)} />

  function closeMobileMenu ( ) {
    setOpenMenu(false)
  }
  
  return (
    <div className='burger-menu'>
    { openMenu ? closeBurgerMenu : burgerMenuIcon}
    { openMenu ? <NavElemets isMobile={true} closeMobileMenu={closeMobileMenu}/> : false }

    </div>
  )
}

export default BurgerMenu