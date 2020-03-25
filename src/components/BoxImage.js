import React from 'react';
import {Figure, Container} from 'react-bootstrap';
import FigureImage from 'react-bootstrap/FigureImage';

export default function Home() {
  return (
    <Container>
      <Figure>

        <FigureImage 
        width={171} 
        height={180} 
        alt="171x180"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" />
      </Figure>
    </Container>
  )
}
