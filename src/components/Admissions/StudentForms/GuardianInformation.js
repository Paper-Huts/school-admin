import React from 'react'
import { Row, Col, Form, Container, Button } from 'react-bootstrap'
import styles from '../../../stylesheets/CustomComponents.module.css'

const GuardianInformation = ({ formItems, handleChange, saveInfo, goToPrev, goToNext }) => {    
  return (
    <Container className={styles.studentInfoFormContainer}>
      <div className={styles.studentInfoForm}>
        <legend>Guardian #1</legend>
        <hr className='mb-5' />
        <Form.Group as={Row} controlId='guardianInfoFirstName'>
          <Form.Label column sm='2'>First Name</Form.Label>
          <Col sm='10'>
            <Form.Control 
              name='g1FirstName'
              type='text'
              placeholder=''
              size="sm"
              onChange={handleChange}
              value={formItems.g1FirstName} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='guardianInfoLastName'>
          <Form.Label column sm='2'>Last Name</Form.Label>
          <Col sm='10'>
            <Form.Control 
              name='g1LastName'
              type='text'
              placeholder=''
              size="sm"
              onChange={handleChange}
              value={formItems.g1LastName} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='guardianInfootherNames'>
          <Form.Label column sm='2'>Other Names</Form.Label>
          <Col sm='10'>
            <Form.Control 
              name='g1OtherNames'
              type='text'
              placeholder=''
              size="sm"
              onChange={handleChange}
              value={formItems.g1OtherNames} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='guardianInfoRelationship'>
          <Form.Label column sm='2'>Relationship</Form.Label>
          <Col sm='10'>
            <Form.Control 
              name='g1Relationship'
              as='select'
              placeholder=''
              size="sm"
              onChange={handleChange}
              value={formItems.g1Relationship} >
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
              name='g1Occupation'
              type='text'
              placeholder=''
              size="sm"
              onChange={handleChange}
              value={formItems.g1Occupation} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='guardianInfoAddress'>
          <Form.Label column sm='2'>Address</Form.Label>
          <Col sm='10'>
            <Form.Control 
              name='g1Address'
              type='text'
              placeholder=''
              size="sm"
              onChange={handleChange}
              value={formItems.g1Address} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='guardianInfoPhoneNumber'>
          <Form.Label column sm='2'>Phone Number</Form.Label>
          <Col sm='10'>
            <Form.Control 
              name='g1PhoneNumber'
              type='text'
              placeholder=''
              size="sm"
              onChange={handleChange}
              value={formItems.g1PhoneNumber} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='guardianInfoAltPhoneNumber'>
          <Form.Label column sm='2'>Alternative Phone Number</Form.Label>
          <Col sm='10'>
            <Form.Control 
              name='g1AltPhoneNumber'
              type='text'
              placeholder=''
              size="sm"
              onChange={handleChange}
              value={formItems.g1AltPhoneNumber} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='guardianInfoCanPickUp'>
          <Form.Label column sm='2'>Can pick up child (from School)?</Form.Label>
          <Col sm='10'>
            <fieldset>
              <Form.Check size="sm" inline label='Yes' type='radio' name='g1CanPickUpFromSchool' />
              <Form.Check size="sm" inline label='No' type='radio' name='g1CanPickUpFromSchool' />
            </fieldset>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='guardianInfoPrimaryGuardian'>
          <Form.Label column sm='2'>Primary Guardian?</Form.Label>
          <Col sm='10'>
            <fieldset>
              <Form.Check size="sm" inline label='Yes' type='radio' name='g1PrimaryGuardian' />
              <Form.Check size="sm" inline label='No' type='radio' name='g1PrimaryGuardian' />
            </fieldset>
          </Col>
        </Form.Group>
        <Form.Row>
          <Col>
            <Button className='btn-block' 
              variant='outline-primary' 
              href='#'
              data-rb-event-key='personalInformation'
              onSubmit={goToPrev}
              role='tab'>
                Previous
            </Button>
          </Col>
          <Col>
            <Button as={Col} className='btn-block' 
              variant='outline-primary' 
              href='#'
              data-rb-event-key='registrationInformation'
              onSubmit={saveInfo}
              role='tab'>
                Save
            </Button>
          </Col>
          <Col>
            <Button as={Col} className='btn-block' 
              variant='outline-primary' 
              href='#'
              data-rb-event-key='registrationInformation'
              onSubmit={goToNext}
              role='tab'>
                Next
            </Button>
          </Col>
        </Form.Row>
      </div>
    </Container>
  )
}

export default GuardianInformation