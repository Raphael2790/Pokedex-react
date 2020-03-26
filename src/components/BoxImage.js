import React from 'react';
import {Figure} from 'react-bootstrap';

export default function BoxImage({id }) {

  let source = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`

  return (
      <Figure>

        <img 
        width="171" 
        height="180" 
        alt="171x180"
        src={source} />
      </Figure>
  )
}
