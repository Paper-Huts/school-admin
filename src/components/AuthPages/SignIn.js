import React, { Component } from 'react'
import { Form, Button, ButtonGroup } from 'react-bootstrap'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import styles from '../../stylesheets/AuthPages.module.css'

import MiniHeader from '../CustomComponents/MiniHeader'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: ''})
    } catch (error) {
      console.error(error)
    }
    
    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    return (
      <div className={styles.signIn}>
        <MiniHeader title='Login' />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>E-mail address</Form.Label>
            <Form.Control 
              controlid='signInEmail'
              name='email'
              type='email' 
              placeholder='Enter email' 
              onChange={this.handleChange} 
              value={email} />
          </Form.Group>

          <Form.Group controlId='signInPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              controlid='signInPassword' 
              name='password'
              type='password' 
              placeholder='Password' 
              onChange={this.handleChange} 
              value={password} />
          </Form.Group>
        </Form>
        <ButtonGroup>
          <Button variant='secondary' type='submit'>Login</Button>
          <Button onClick={signInWithGoogle}>Login with Google</Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default SignIn
