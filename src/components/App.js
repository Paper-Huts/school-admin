import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navigation from '../components/Navigation/Navigation'
import Landing from '../components/Landing/Landing'

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Navigation />
        </Col>
        <Col>
          <Landing />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
