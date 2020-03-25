import React, { Component } from 'react';
import {Navbar, Nav, FormControl, Form, Button, Container} from 'react-bootstrap'

export default class MenuNav extends Component {
  render() {
    return (
      <>
      <Container>
        <Navbar bg="secondary" expand="lg" className="justify-content-center">
          <Navbar.Brand href="/">Pokedex</Navbar.Brand>
          <Nav classname="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pokedex">Pokedex</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Buscar Pokemon" className="mr-sm-4"/>
            <Button variant="outline-light">Buscar</Button>
          </Form>
        </Navbar>
      </Container>
      </>
    )
  }
}
