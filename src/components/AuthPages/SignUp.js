import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import MiniHeader from '../CustomComponents/MiniHeader'

class SignUp extends Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    const {displayName, email, password, confirmPassword} = this.state

    if(password !== confirmPassword) {
      alert("Passwords don't match")

      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch(error) {
      console.error(error)
    }
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state

    return (
      <div className='signUpPage'>    
        <MiniHeader title='Sign Up' />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control 
              controlid='signUpName'
              name='displayName'
              type='text' 
              placeholder='Full Name' 
              onChange={this.handleChange} 
              value={displayName} />
          </Form.Group>

          <Form.Group>
            <Form.Label>E-mail address</Form.Label>
            <Form.Control 
              controlid='signUpEmail'
              name='email'
              type='email' 
              placeholder='Enter email' 
              onChange={this.handleChange} 
              value={email} />
          </Form.Group>

          <Form.Group controlId='signInPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              controlid='signUpPassword'
              name='password'
              type='password' 
              placeholder='Password' 
              onChange={this.handleChange} 
              value={password} />
          </Form.Group>

          <Form.Group controlId='signInPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              controlid='signUpConfirmPassword' 
              name='confirmPassword'
              type='password' 
              placeholder='Confirm Password' 
              onChange={this.handleChange} 
              value={confirmPassword} />
          </Form.Group>
        </Form>

        <Button variant='secondary' type='submit'>Sign Up</Button>
      </div>
    )
  }
}

SignUp.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string
}

export default SignUp