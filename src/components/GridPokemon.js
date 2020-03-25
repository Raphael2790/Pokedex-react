import React, { Component } from 'react';

const {bancoPokemon} = require('../data')


export default class GridPokemon extends Component {
  state=bancoPokemon
  
  render() {
    return (
      <div>
        {this.state.Name}
      </div>
    )
  }
}
