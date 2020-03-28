import React from 'react';
import {Container, ListGroup, ListGroupItem} from 'react-bootstrap';

export default function ListGenerations() {
    
  return (
        <Container >
        <ListGroup horizontal className="list">
          <ListGroupItem action variant="dark"className="list-group-pokemon">1°Geração</ListGroupItem>
          <ListGroupItem action variant="dark"className="list-group-pokemon">2°Geração</ListGroupItem>
          <ListGroupItem action variant="dark"className="list-group-pokemon">3°Geração</ListGroupItem>
          <ListGroupItem action variant="dark"className="list-group-pokemon">4°Geração</ListGroupItem>
          <ListGroupItem action variant="dark"className="list-group-pokemon">5°Geração</ListGroupItem>
          <ListGroupItem action variant="dark"className="list-group-pokemon">6°Geração</ListGroupItem>
          <ListGroupItem action variant="dark"className="list-group-pokemon">Todas Gerações</ListGroupItem>
        </ListGroup>
        </Container>
  )
}
