import React from 'react'

import Apt1 from '../assects/vox1.jpg'
import Apt2 from '../assects/vox2.jpg'
import Apt3 from '../assects/vox3.jpg'

import './Best.css'

const Best = () => {
    return (
        <div className='best'>
            <h1>Our Tours and Gigs</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Choir</p>
                <p>Gigs</p>
                <p>Vacations</p>
            </div>
            <div className='container'>
                <img src={Apt1} alt='' />
                <img src={Apt2} alt='' />
                <img src={Apt3} alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best