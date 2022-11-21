import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import {Navigate} from 'react-router-dom'
import './getStarted.scss'

//icons
import {GoLocation} from 'react-icons/go'
import {AiOutlineCalendar} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'


function GetStarted() {

  //context
  const {user} = UserAuth()

  //states  
  const [city, setCity] =useState(null)
  const [chooseTown, setChooseTown] = useState([
    {
      id:1,
      town: 'Berlin',
      adress: 'Salsastaße 22, 20 458 Berlin'
    },
    {
      id:2,
      town: 'Hamburg',
      adress: 'Foxstrotstraße 55, 30 173 Hamburg'

    },
    {
      id:3,
      town: 'Münich',
      adress: 'Tangostraße 5, 30 487 Münich'
    },
    {
      id:4,
      town: 'Düsseldorf',
      adress: 'Rumbastraße 57 30 173 Düsseldorf'
    },
    {
      id:5,
      town: 'Dortmund',
      adress: 'Sambastraße 9, 30 173 Dortmund'
    }
  ])
  const [date, setDate] = useState()
  const [friendsNumber, setFriendsNumber] = useState(0)
  const [showData, setShowData] = useState(false)



  // page only with account 
  // if user is not loggen in, navigate to login page, 
  if(!user) {
    return <Navigate to='/login' />
  }

  // choose town 
  function handleChooseTown(e) {
    // console.log( e.target.town)
    const resultTown = chooseTown.find( (item) => {
      if( e.target.value === item.town )
      return {...item, item: town }
      
    })
    console.log('resulzt here: ',resultTown)
    setCity(resultTown)
  }
  
  //select date 
  function handleDate(e){
    // e.preventDefault()
    const currDate= new Date()
    setDate(currDate)
  }

  //select fiends - max 3
  function handleFriendsNumber(e){
    const min = 0
    const max = 3
    const result = Math.max(min, Math.min(max, Number(e.target.value)));
    setFriendsNumber(result);
  }


  // --------------------------------------

  
  function handleConfirm(){
    const data = {
      user: user.email,
      city: city.adress,
      date: date ,
      friendsNumber: friendsNumber
    }
    setShowData(true, data)
    console.log('confirmed: ' ,data);
    return(
    <div>
      You're invited in {data.date} in {data.city}
      {data}
    
    </div>
    )
  }


  return (

    <main>
    <span>Welcome {user.email}</span>
    <h1>Set a free game trial with your friends!  </h1>

    <h4>Choose a date, town and number of your friends</h4>
      <section className="set-meeting">
        <div className='meeting-ctn'>
          <GoLocation className='login-icon-btn'/>
          <label htmlFor="town"></label>
          <select 
            onChange={handleChooseTown}
            name="town" id="town" >
            
              { 
                chooseTown.map( (item, index) => {
                  return (
                    <option 
                    // onChange={(e) => setTown(e.target.value)}
                    key={index}
                    value={item.town}
                    >
                    {item.town}
                  </option>
                  )
                })
              }
          </select>
        </div>
        <div className='meeting-ctn'>
            <AiOutlineCalendar/>
            <input 
            onChange={handleDate}
            type="date" />
        </div>

        <div className='meeting-ctn'>
            <BsPerson/>
            <input 
            onChange={handleFriendsNumber}
            type="number" 
            value={friendsNumber} />
        </div >

        <div className='meeting-ctn'>
          <button 
          onClick={handleConfirm}
          className="meeting-btn">confirm</button>
        </div>

        <div className='meeting-ctn'>
          <h5>Congrats!</h5>
          {showData}
         
        </div>


      </section>
    </main>
  )
}

export default GetStarted