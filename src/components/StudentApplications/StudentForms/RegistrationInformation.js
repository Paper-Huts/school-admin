import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import styles from '../../../stylesheets/CustomComponents.module.css'

class RegistrationInformation extends Component{
  constructor(props) {
    super(props)

    this.state = {
      nameOfProxyWhoSubmittedApplication: '',
      dateOfApplicationSubmission: '',
      endorserFirstName: '',
      endorserLastName: '',
      endorserOtherNames: '',
      dateSigned: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  handleChange = e => {    
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render() {
    const { nameOfProxyWhoSubmittedApplication, dateOfApplicationSubmission, endorserFirstName, endorserLastName, endorserOtherNames } = this.state
    
    return (
      <Container className={styles.studentInfoFormContainer}>
        <Form className={styles.studentInfoForm}>
          <legend>Submission Details</legend>
          <hr className='mb-5' />
          <Form.Group as={Row} controlId='registrationInfoFirstName'>
            <Form.Label column sm='4'>Name of Person Who Submitted the Original Application</Form.Label>
            <Col sm='8'>
              <Form.Control 
                name='nameOfProxyWhoSubmittedApplication'
                type='text'
                placeholder=''
                size="sm"
                onChange={this.handleChange}
                value={nameOfProxyWhoSubmittedApplication} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='registrationInfoFirstName'>
            <Form.Label column sm='4'>When was the Application Submitted?</Form.Label>
            <Col sm='8'>
              <Form.Control 
                name='dateOfApplicationSubmission'
                type='text'
                placeholder=''
                size="sm"
                onChange={this.handleChange}
                value={dateOfApplicationSubmission} />
            </Col>
          </Form.Group>
          <hr />
          <Form.Group controlId='guardianInfoOccupation'>
            <Form.Check type='checkbox' label='As the person responsible for typing in the data, I confirm that the data is accurate to the best of my ability' />
          </Form.Group>
          <Button className='btn-block' type='submit' onSubmit={this.handleChange}>Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default RegistrationInformation