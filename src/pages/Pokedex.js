import React, { Component } from 'react';
import Banner from '../components/Banner';
import MenuNav from '../components/MenuNav';
import GridPokemon from '../components/GridPokemon';
import Footer from '../components/Footer';
import Title from '../components/Title';


export default class Pokedex extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  render() {
    return (
      <>
      <MenuNav/>
      <Banner/>
      <Title title="Pokemons"/>
      <GridPokemon/>
      <Footer/>
      </>
    )
  }
}
