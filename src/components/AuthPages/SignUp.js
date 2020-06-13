import React from 'react'
import { Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import MiniHeader from '../CustomComponents/MiniHeader'

const SignUp = () => (
  <div className='signUpPage'>    
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
  </div>
)

SignUp.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string
}

export default SignUp