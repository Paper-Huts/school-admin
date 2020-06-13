import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import SignIn from './SignIn'
import SignUp from './SignUp'

const AuthPages = () => (
  <Container>
    <Row>
      <Col md={6}>
        <SignIn />
      </Col>
      <Col md={6}>
        <SignUp />
      </Col>
    </Row>
  </Container>
)

export default AuthPages