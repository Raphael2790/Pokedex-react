import React, { Component } from 'react';
import BoxImage from './BoxImage';
import {Col, Row, Container, Carousel, CarouselItem} from 'react-bootstrap'
import {PokemonContext} from '../Context';

export default class FeaturedPokemon extends Component {

  static contextType = PokemonContext;

  render() {

    const {featured} = this.context;

    return (
      <Container>
        
      </Container>
    )
  }
}
