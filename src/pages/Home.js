import React from 'react'
import {Link} from 'react-router-dom';
import ProfileImg from '../media/Back.jpg';
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${ProfileImg})`}}>
        <div className='headerContainer'>
            <h1>Adrian Professional Portfolio</h1>
            <p>The Journey Begins</p>
           <Link to='/portfolio'> <button>Click to Enter Portfolio</button> </Link>
        </div>
    </div>
  )
}

export default Home