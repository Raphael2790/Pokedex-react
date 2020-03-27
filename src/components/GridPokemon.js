import React, { Component } from 'react';
import {Container,Card} from 'react-bootstrap';
import BoxImage from './BoxImage';
import {PokemonContext} from '../Context';


export default class GridPokemon extends Component {
  static contextType = PokemonContext;

  render() {
    
    let {pokemons,featured,legendary} = this.context;

    return (
      <Container>
        { featured.map((item, index)=> {
          let indexPokemon= index < 100?`0${++index}`:++index 
          let firstPokemon = index < 10?`00${index}`:indexPokemon
          

            return <Table striped bordered hover variant="dark">
                  <Container>
                  <Row>
                  <BoxImage id={item.Row}/>
                   
                      <td><Col sm={4}><p>{item.Name}</p></Col></td>
                      

                    </Row>
                    </Container>
                    </Table>

          })
        }
      </Container>
    )
        }
      }
