import React from 'react';

export default function BoxImage({id }) {

  let source = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`

  return (
      
        
        <img className="image-pokemon"
        width="280" 
        height="200" 
        alt="171x180"
        src={source} />
        
    
  )
}
