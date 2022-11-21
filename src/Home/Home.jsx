//style
import './home.scss'
//components
import Navigation from '../pages/Navigation/Navigation'
import Heroimg  from '../assets/images/Heroimg.jpg'
//Router
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
   

      <main>
        <section className='hero'>
          <div className='img-hero'>
            <img src={Heroimg} alt="virtual reality" />
            
          </div>

          <div className='hero-headliner'>
            <h1>Let's explore the world of the <span>virtual reality!</span></h1>

            <Link to='/getStarted'> <button 
            className='getStarted-btn'>Get started</button>
            </Link>
          
          </div>

        </section>      
      </main>
      
    </>
  )
}

export default Home