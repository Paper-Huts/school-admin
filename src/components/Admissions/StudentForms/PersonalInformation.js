import React from 'react'
import { Col, Form, Container, Button, Row, ButtonGroup } from 'react-bootstrap'

import styles from '../../../stylesheets/CustomComponents.module.css'

const PersonalInformation = ({ formItems, handleChange, saveInfo, goToNext }) => {
  return (
    <Container fluid>
      <legend>Personal Information</legend>
      <hr className='mb-5' />
      <Row>
        <Col sm={12} lg={6} style={{padding: '0 5%'}}>
          <Form.Group as={Row} controlId='personalInfoFirstName'>
            <Form.Label column sm='3'>First Name</Form.Label>
            <Col sm='9'>
              <Form.Control 
                name='firstName'
                type='text'
                placeholder=''
                size="sm"
                onChange={handleChange}
                value={formItems.firstName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='personalInfoLastName'>
            <Form.Label column sm='3'>Last Name</Form.Label>
            <Col sm='9'>
              <Form.Control 
                name='lastName'
                type='text'
                placeholder=''
                size="sm"
                onChange={handleChange}
                value={formItems.lastName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='personalInfootherNames'>
            <Form.Label column sm='3'>Other Names</Form.Label>
            <Col sm='9'>
              <Form.Control 
                name='otherNames'
                type='text'
                placeholder=''
                size="sm"
                onChange={handleChange}
                value={formItems.otherNames} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='personalInfoAddress'>
            <Form.Label column sm='3'>Address</Form.Label>
            <Col sm='9'>
              <Form.Control 
                name='address'
                type='text'
                placeholder=''
                size="sm"
                onChange={handleChange}
                value={formItems.address} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='personalInfoDateOfBirth'>
            <Form.Label column sm='3'>Date of Birth</Form.Label>
            <Col sm='9'>
              <Form.Control 
                name='dateOfBirth'
                type='text'
                placeholder=''
                size="sm"
                onChange={handleChange}
                value={formItems.dateOfBirth} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='personalInfoGender'>
            <Form.Label column sm='3'>Gender</Form.Label>
            <Col sm='9'>
              <fieldset name='gender' value={formItems.gender}>
                <Form.Check inline label='Male' type='radio' />
                <Form.Check inline label='Female' type='radio' />
              </fieldset>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='personalInfoHometown'>
            <Form.Label column sm='3'>Hometown</Form.Label>
            <Col sm='9'>
              <Form.Control 
                name='hometown'
                type='text'
                placeholder=''
                size="sm"
                onChange={handleChange}
                value={formItems.hometown} />
            </Col>
          </Form.Group>
        </Col>
        <Col sm={12} lg={6} style={{padding: '0 5%'}}>
          <Form.Group as={Row} controlId='personalInfoNationality'>
            <Form.Label column sm='3'>Nationality</Form.Label>
            <Col sm='9'>
              <Form.Control 
                name='nationality'
                as='select'
                size="sm"
                onChange={handleChange}
                value={formItems.nationality}>
                <option>Ghanaian</option>
                <option>Other</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='personalInfoReligiousAffiliation'>
            <Form.Label column sm='3'>Religious Affiliation</Form.Label>
            <Col sm='9'>
              <Form.Control 
                name='religiousAffiliation'
                as='select'
                placeholder='Select a Religion'
                size="sm"
                onChange={handleChange}
                value={formItems.religiousAffiliation} >
                <option>Christian</option>
                <option>Christian (Catholic)</option>
                <option>Muslim</option>
                <option>Budhist</option>
                <option>Hindu</option>
                <option>Other</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='personalInfoNameOfFormerSchool'>
            <Form.Label column sm='3'>Name of Former School</Form.Label>
            <Col sm='9'>
              <Form.Control 
                name='nameOfFormerSchool'
                type='text'
                placeholder=''
                size="sm"
                onChange={handleChange}
                value={formItems.nameOfFormerSchool} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='personalInfoDisabilityStatus'>
            <Form.Label column sm='3'>Disability Status</Form.Label>
            <Col sm='9'>
              <fieldset value={formItems.disabilityStatus}>
                <Form.Check size="sm" inline label='Disabled' type='radio' name='disabilityStatus' />
                <Form.Check size="sm" inline label='Not Disabled' type='radio' name='disabilityStatus' />
              </fieldset>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='personalInfoDisabilityInformation'>
            <Form.Label column sm='3'>Disability Information</Form.Label>
            <Col sm='9'>
              <Form.Control 
                name='disabilityInformation'
                type='text'
                placeholder=''
                size="sm"
                onChange={handleChange}
                value={formItems.disabilityInformation} />
            </Col>
          </Form.Group>
        </Col>
      </Row>
      {/* <ButtonGroup>
        <Button 
          variant='secondary' 
          href='#'
          data-rb-event-key='registrationInformation'
          onSubmit={saveInfo}
          role='tab'>
            Save
        </Button>
        <Button
          variant='secondary' 
          href='#'
          data-rb-event-key='registrationInformation'
          onSubmit={goToNext}
          role='tab'>
            Next
        </Button>
      </ButtonGroup> */}
    </Container>
  )
}

export default PersonalInformation