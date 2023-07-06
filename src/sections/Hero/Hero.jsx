import React from 'react';
import { Link } from 'react-router-dom'
import './Hero.css'
import { Button } from '../../component/index';
const Hero = () => {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subtitle'> Welcome To Cyborg</h6>
            <h4 className='hero-title'> <em>Browse</em> Our Popular Games Here</h4>
            <Link to="/browse" className='main-button' ><Button>Browse Now</Button></Link>
                
            

        </div>

    </div>
  )
}

export default Hero