import React from 'react';
import { Container} from 'react-bootstrap';

export default function Title({title}) {
  return (
      <Container className="section-title">
      <h4>{title}</h4>
      </Container>  
  )
}
