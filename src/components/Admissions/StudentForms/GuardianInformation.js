import React, { Component } from 'react'
import { Row, Col, Form, Container, Button } from 'react-bootstrap'
import styles from '../../../stylesheets/CustomComponents.module.css'

class GuardianInformation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      otherNames: '',
      relationship: '',
      occupation: '',
      address: '',
      phoneNumber: '',
      altPhoneNumber: '',
      canPickUpFromSchool: '',
      primaryGuardian: true
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
    const {firstName, lastName, otherNames, relationship, occupation, address, 
      phoneNumber, altPhoneNumber, canPickUpFromSchool, primaryGuardian} = this.state
    
    return (
      <Container className={styles.studentInfoFormContainer}>
        <Form className={styles.studentInfoForm}>
          <legend>Guardian #1</legend>
          <hr className='mb-5' />
          <Form.Group as={Row} controlId='guardianInfoFirstName'>
            <Form.Label column sm='2'>First Name</Form.Label>
            <Col sm='10'>
              <Form.Control 
                name='firstName'
                type='text'
                placeholder=''
                size="sm"
                onChange={this.handleChange}
                value={firstName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='guardianInfoLastName'>
            <Form.Label column sm='2'>Last Name</Form.Label>
            <Col sm='10'>
              <Form.Control 
                name='lastName'
                type='text'
                placeholder=''
                size="sm"
                onChange={this.handleChange}
                value={lastName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='guardianInfootherNames'>
            <Form.Label column sm='2'>Other Names</Form.Label>
            <Col sm='10'>
              <Form.Control 
                name='otherNames'
                type='text'
                placeholder=''
                size="sm"
                onChange={this.handleChange}
                value={otherNames} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='guardianInfoRelationship'>
            <Form.Label column sm='2'>Relationship</Form.Label>
            <Col sm='10'>
              <Form.Control 
                name='relationship'
                as='select'
                placeholder=''
                size="sm"
                onChange={this.handleChange}
                value={relationship} >
                <option>Father</option>
                <option>Mother</option>
                <option>Brother</option>
                <option>Sister</option>
                <option>Other</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='guardianInfoOccupation'>
            <Form.Label column sm='2'>Occupation</Form.Label>
            <Col sm='10'>
              <Form.Control 
                name='occupation'
                type='text'
                placeholder=''
                size="sm"
                onChange={this.handleChange}
                value={occupation} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='guardianInfoAddress'>
            <Form.Label column sm='2'>Address</Form.Label>
            <Col sm='10'>
              <Form.Control 
                name='address'
                type='text'
                placeholder=''
                size="sm"
                onChange={this.handleChange}
                value={address} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='guardianInfoPhoneNumber'>
            <Form.Label column sm='2'>Phone Number</Form.Label>
            <Col sm='10'>
              <Form.Control 
                name='phoneNumber'
                type='text'
                placeholder=''
                size="sm"
                onChange={this.handleChange}
                value={phoneNumber} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='guardianInfoAltPhoneNumber'>
            <Form.Label column sm='2'>Alternative Phone Number</Form.Label>
            <Col sm='10'>
              <Form.Control 
                name='altPhoneNumber'
                type='text'
                placeholder=''
                size="sm"
                onChange={this.handleChange}
                value={altPhoneNumber} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='guardianInfoCanPickUp'>
            <Form.Label column sm='2'>Can pick up child (from School)?</Form.Label>
            <Col sm='10'>
              <fieldset>
                <Form.Check size="sm" inline label='Yes' type='radio' name='canPickUpFromSchool' />
                <Form.Check size="sm" inline label='No' type='radio' name='canPickUpFromSchool' />
              </fieldset>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='guardianInfoPrimaryGuardian'>
            <Form.Label column sm='2'>Primary Guardian?</Form.Label>
            <Col sm='10'>
              <fieldset>
                <Form.Check size="sm" inline label='Yes' type='radio' name='primaryGuardian' />
                <Form.Check size="sm" inline label='No' type='radio' name='primaryGuardian' />
              </fieldset>
            </Col>
          </Form.Group>
          <Form.Row>
            <Col>
              <Button className='btn-block' 
                variant='outline-primary' 
                href='#'
                data-rb-event-key='guardianInformation'
                onSubmit={this.handleSubmit}
                role='tab'>
                  Previous
              </Button>
            </Col>
            <Col>
              <Button as={Col} className='btn-block' 
                variant='outline-primary' 
                href='#'
                data-rb-event-key='guardianInformation'
                onSubmit={this.handleSubmit}
                role='tab'>
                  Next
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    )
  }
}

export default GuardianInformation