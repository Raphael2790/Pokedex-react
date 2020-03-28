import React, { Component } from 'react';
import allpokemons from './data';

const PokemonContext = React.createContext();


class PokemonProvider extends Component {
  state={
    pokemons:[],
    featured:[],
    weakers:[],
    loading:true,
    aquirable:[]
  }

  componentDidMount() {
    let pokemons = allpokemons
    let aquirable = allpokemons.filter(pokemon =>
      pokemon.Row < 385)
    let weakers = allpokemons.filter(pokemon =>
      pokemon.ATK < 100 && pokemon.Row < 385)
    let featured = allpokemons.filter(pokemon => 
      pokemon["Not-Gettable"] === "1");

      this.setState({
        pokemons,
        featured,
        aquirable,
        weakers
      })
  }

  formatData(allpokemons) {
    let tempPokemons = allpokemons.map(item => {
      let pokemonAttributeKey = Object.keys(item)
      let pokemonAttributeValue = Object.values(item)
      let attributesAndKeys = {pokemonAttributeKey,pokemonAttributeValue}
      return attributesAndKeys
    })
    return tempPokemons
  }

  render() {
    return (
      <PokemonContext.Provider value={{...this.state}}>
        {this.props.children}
      </PokemonContext.Provider>
    )
  }
}

const PokemonConsumer = PokemonContext.Consumer;

export {PokemonContext, PokemonProvider, PokemonConsumer}
