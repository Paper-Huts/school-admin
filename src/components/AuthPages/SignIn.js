import React from 'react'
import { Form, Button, ButtonGroup } from 'react-bootstrap'

import { signInWithGoogle } from '../../firebase/firebase.utils'
import styles from '../../stylesheets/AuthPages.module.css'

import MiniHeader from '../CustomComponents/MiniHeader'

const SignIn = () => (
  <div className={styles.signIn}>
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
      <Button onClick={() => signInWithGoogle()}>Login with Google</Button>
    </ButtonGroup>
  </div>
)

export default SignIn
