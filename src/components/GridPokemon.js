import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const {bancoPokemon} = require('../data')


export default class GridPokemon extends Component {
  state=bancoPokemon
  
  render() {
    return (
      <Container>
        {this.state.map((item)=>{

          return  <Container>
                  <Row>
                  <Col sm={4}><p>{item.Name}</p></Col>
                  <Col sm={4}><p>{item.Row}</p></Col>
                  <Col sm={4}><p>{item.Generation}</p></Col>
                  <Col sm={4}><p>{item.Name}</p></Col>
                  <Col sm={4}><p>{item.Row}</p></Col>
                  <Col sm={4}><p>{item.Generation}</p></Col>
                  <Col sm={4}><p>{item.Name}</p></Col>
                  <Col sm={4}><p>{item.Pokedex}</p></Col>
                  <Col sm={4}><p>{item.Generation}</p></Col>
                  <Col sm={4}><p>{item.Name}</p></Col>
                  <Col sm={4}><p>{item.Pokedex}</p></Col>
                  <Col sm={4}><p>{item.Generation}</p></Col>
                  </Row>
                  </Container>
        })}
      </Container>
    )
  }
}
