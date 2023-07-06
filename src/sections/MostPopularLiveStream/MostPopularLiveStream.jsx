import React from 'react'
import './MostPopularLiveStream.css'
import { Button, CardStream } from '../../component/index';
import LiveStreamsData from '../../Data/LiveStreamsData'

const MostPopularLiveStream = () => {

  
  const cards = LiveStreamsData.map((card) => {
    return (
      <CardStream key={card.id}
        image={card.image}
        image2={card.image2}
        desc={card.desc}
        username={card.username}
        rate={card.rate}
        gamename={card.gamename}
      />
    );
  });


  return (
   
    <div className="live-stream">
      <div className="col-lg-12">
        <div className="heading-section">
          <h4><span>Most Popular</span> Live Stream</h4>
        </div>
      </div>
      <div className="row">
        {cards}
        <div className="col-lg-12">
          <div className="main-button">
            <Button>Load More Streams</Button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default MostPopularLiveStream