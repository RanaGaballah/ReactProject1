import React from 'react'
import './Streams.css'


import { MostPopularLiveStream,TopStreams } from '../../sections/index';

const Streams = () => {
  return (
    <div className='page-content'>
    
      <div className="row">
              
              <TopStreams/>
      </div>

      <MostPopularLiveStream/>

    </div>
  )
}

export default Streams