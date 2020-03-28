import React, { Component } from 'react';
import MenuNav from '../components/MenuNav';
import {Link} from 'react-router-dom';
import {PokemonContext} from '../Context';

export default class PokemonPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  render() {
    return (
      <MenuNav/>
    )
  }
}
