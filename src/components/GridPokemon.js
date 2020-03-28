import React, { Component } from 'react';
import {Container,Card,CardImg} from 'react-bootstrap';
import {PokemonContext} from '../Context';


export default class GridPokemon extends Component {
  static contextType = PokemonContext;

  render() {
    
    let {pokemons} = this.context;

    return (
      <Container className="card-container">
        { pokemons.map((item, index)=> {
          let id = item.Row < 100?`0${item.Row}`:item.Row
          let firstid = item.Row < 10?`00${item.Row}`:id
          let src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${firstid || id}.png`
          const click = () => {
            alert(item.Name)
          }

            return <Card style={{width:'10rem'}} className="card" onClick={click}>
                   <CardImg variant="top"
                   src={src}>
                   </CardImg>
                   <small>N°{id}</small>
                    <Card.Body>
                      <Card.Title>{item.Name}</Card.Title>
                      <Card.Text>
                      <small>ATK: {item.ATK}</small>
                      </Card.Text>
                      <Card.Text>
                      <small>DEF: {item.DEF}</small>
                      </Card.Text>
                      <Card.Text>
                      <small>STA: {item.STA}</small>
                      </Card.Text>
                      
                    </Card.Body>
                    </Card>
                    

          })
        }
      </Container>
    )
        }
      }
