import React, { Component } from 'react';
import {Container,Card,CardImg} from 'react-bootstrap';
import {PokemonContext} from '../Context';


export default class GridPokemon extends Component {
  static contextType = PokemonContext;

  render() {
    
    let {pokemons} = this.context;

    return (
      <Container className="card-container">
        
        { pokemons.map((item)=> {
          
          let id = item["Pokedex Number"] < 100?`0${item["Pokedex Number"]}`:item["Pokedex Number"]
          let firstid = item["Pokedex Number"] < 10?`00${item["Pokedex Number"]}`:id
          let src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${ firstid || id}.png`
                   
            return <a key={item["Pokedex Number"]} href={`https://www.pokemon.com/br/pokedex/${item.Name}`}>
                   <Card style={{width:'10rem'}} className="card">
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
                    </a>
                    

          })
        }
      </Container>
    )
        }
      }
