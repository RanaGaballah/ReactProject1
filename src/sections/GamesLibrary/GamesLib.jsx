import React from 'react'
import './GamesLib.css'
import GamesLibData from '../../Data/GamesLibData'
import { Library,SectionHeader, SectionWrapper } from "../../component/index";

const GamesLib = () => {
    
  const games = GamesLibData.map((game) => {
    return (
      <Library key={game.id}
        image={game.image}
        title={game.title}
        category={game.category}
        date={game.data_added}
        hours={game.hourse_played}
        download={game.download}
      />
    );
  });
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className="gaming-library-cards">{games}</div>
      </SectionWrapper>
    </>
  )
}

export default GamesLib