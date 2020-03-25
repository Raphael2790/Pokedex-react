import React, { Component } from 'react';
import Banner from '../components/Banner';
import MenuNav from '../components/MenuNav';
import GridPokemon from '../components/GridPokemon'

export default class Pokedex extends Component {
  render() {
    return (
      <>
      <MenuNav/>
      <Banner/>
      <GridPokemon/>
      </>
    )
  }
}
