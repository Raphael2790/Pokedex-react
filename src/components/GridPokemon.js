import React, { Component } from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';
import BoxImage from './BoxImage';

import pokemons from '../data';


export default class GridPokemon extends Component {
  state = pokemons

  render() {
    
    let keysValues = {
    contentValue :  this.state.map(item =>Object.values(item)),
    contentKeys : this.state.map(item =>Object.keys(item))
    }
  

    return (
      <Container>
        { keysValues.contentValue.map((item, index)=> {
          let indexPokemon= index < 100?`0${++index}`:++index 
          let firstPokemon = index < 10?`00${index}`:indexPokemon
          

            return <Table striped bordered hover variant="dark">
                  <Container>
                  <Row>
                  <BoxImage id={firstPokemon || indexPokemon}/>
                    {item.map((item => 
                      <td><Col sm={4}><p>{item}</p></Col></td>
                      ))}

                    </Row>
                    </Container>
                    </Table>

          })
        }
      </Container>
    )
        }
      }
