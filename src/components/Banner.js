import React from 'react';
import {Jumbotron, Button, Image, Container} from 'react-bootstrap';
import bannerPokemon from '../images/pokemon-image.jpg'


export default function Banner() {
  return (
    <Container>
      <Jumbotron>
        <Image src={bannerPokemon} alt="Banner Pokemon" width="1050" height="400" rounded />
        <h1>Pokedex Fan Made</h1>
        <p>
          Está é apenas uma página criada por um fã para um simples
          projeto acadêmico, acesse o site oficial clicando no botão abaixo
        </p>
        <a target="_blank" href="https://www.pokemon.com/br/">
        <Button variant="primary">Site Oficial</Button>
        </a>
      </Jumbotron>
    </Container>
  )
}
