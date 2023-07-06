import React from 'react'
import './Home.css'
import {  Hero, MostPopular, GamesLib } from "../../sections/index";


const Home = () => {
  return (
    <>
        <Hero />
        <MostPopular />
        <GamesLib />
    </>
  )
}

export default Home