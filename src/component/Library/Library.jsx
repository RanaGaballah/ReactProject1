import React from 'react'
import './Library.css'
import { SecondaryButton } from '../index'

const Library = (props) => {
  return (
    <div className='gaming-library-card'>
        <ul>
            <li><img src={props.image} alt="" /></li>
            <li><h4>{props.title}</h4><span>{props.category}</span></li>
            <li><h4>Date Added</h4><span>{props.date}</span></li>
            <li><h4>Hourse Played</h4><span>{props.hours}</span></li>
            <li><h4>Currently</h4><span>{props.download}</span></li>
            <SecondaryButton>
            Download
            </SecondaryButton>
            
            
                
            
        </ul>
    </div>
  )
}

export default Library