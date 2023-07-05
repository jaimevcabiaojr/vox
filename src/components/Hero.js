import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='content'>
        <h1>Welcome to our  Vox Angelicum Page</h1>
        <p className='search-text'>what do you think </p>
        <form className='search'>
          <div>
            <input type='text' placeholder='Enter search'/>
          </div>
        </form>




      </div>
      
    </div>
  )
}

export default Hero
