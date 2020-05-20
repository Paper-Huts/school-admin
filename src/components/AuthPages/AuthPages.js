import React from 'react'
import { Container, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap'
import MiniHeader from '../CustomComponents/MiniHeader'

const AuthPages = () => (
  <Container>
    <Row>
      <Col md={6}>
        <MiniHeader title='Login' />
        <Form>
          <Form.Group>
            <Form.Label>E-mail address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group controlId='signInPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
        </Form>
        <ButtonGroup>
          <Button variant='secondary'>Login</Button>
          <Button>Login with Google</Button>
        </ButtonGroup>
      </Col>
      <Col md={6}>
        <MiniHeader title='Sign Up' />
        <Form>
          <Form.Group>
            <Form.Label>E-mail address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group controlId='signInPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>

          <Form.Group controlId='signInPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type='password' placeholder='Confirm Password' />
          </Form.Group>
        </Form>

        <Button variant='secondary'>Sign Up</Button>
      </Col>
    </Row>
  </Container>
)

export default AuthPages