import React from 'react';
import {Jumbotron, Button, Image, Container} from 'react-bootstrap';


export default function Banner() {
  return (
    <Container>
      <Jumbotron>
        <Image src="https://img.ibxk.com.br/2019/09/30/30091641838086.jpg?w=1050&h=420&mode=crop&scale=both" alt="Banner Pokemon" rounded />
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
