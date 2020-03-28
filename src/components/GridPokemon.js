import React, { Component } from 'react';
import {Container,Card,CardImg, ListGroup, ListGroupItem} from 'react-bootstrap';
import {PokemonContext} from '../Context';
import {Link} from 'react-router-dom';


export default class GridPokemon extends Component {
  static contextType = PokemonContext;

  render() {
    
    let {pokemons} = this.context;

    return (
      <Container className="card-container">
        <Container >
        <ListGroup className="list">
          <ListGroupItem action variant="dark"className="list-group-pokemon">1°Geração</ListGroupItem>
          <ListGroupItem action variant="dark"className="list-group-pokemon">2°Geração</ListGroupItem>
          <ListGroupItem action variant="dark"className="list-group-pokemon">3°Geração</ListGroupItem>
          <ListGroupItem action variant="dark"className="list-group-pokemon">4°Geração</ListGroupItem>
          <ListGroupItem action variant="dark"className="list-group-pokemon">5°Geração</ListGroupItem>
          <ListGroupItem action variant="dark"className="list-group-pokemon">6°Geração</ListGroupItem>
          <ListGroupItem action variant="dark"className="list-group-pokemon">Todas Gerações</ListGroupItem>
        </ListGroup>
        </Container>
        { pokemons.map((item, index)=> {
          
          let id = item.Row < 100?`0${item.Row}`:item.Row
          let firstid = item.Row < 10?`00${item.Row}`:id
          let src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${firstid || id}.png`
                   
            return <Link to={`/pokedex/${item.Name}`}>
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
                    </Link>
                    

          })
        }
      </Container>
    )
        }
      }
