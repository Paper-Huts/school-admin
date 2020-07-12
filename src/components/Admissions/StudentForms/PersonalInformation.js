import React from 'react'
import { Col, Form, Container, Row } from 'react-bootstrap'

import styles from '../../../stylesheets/Admissions.module.css'

const PersonalInformation = ({ formItems, handleChange }) => {
  return (
    <Container fluid>
      <legend>Personal Information</legend>
      <hr className='mb-5' />
      <Row>
        <Col sm={12} lg={6} className={styles.formSection}>
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
          <Form.Group as={Row} controlId='personalInfoOtherNames'>
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
              <fieldset onChange={handleChange}>
                <Form.Check size='sm' inline label='Male' type='radio' name='gender' value={formItems.gender} />
                <Form.Check size='sm' inline label='Female' type='radio' name='gender' value={formItems.gender} />
                <Form.Check size='sm' inline label='Unknown' type='radio' name='gender' value={formItems.gender} />
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
        <Col sm={12} lg={6} className={styles.formSection}>
          <Form.Group as={Row} controlId='personalInfoNationality'>
            <Form.Label column sm='3'>Country of Origin</Form.Label>
            <Col sm='9'>
              <Form.Control 
                name='countryOfOrigin'
                as='select'
                size="sm"
                onChange={handleChange}
                value={formItems.countryOfOrigin}>
                  {
                    ['Ghana', 'Ivory Coast', 'Burkina Faso', 'Togo', 'Nigeria', 'Other'].map((country, idx) => (
                      <option key={`${country}-${idx}`}>{country}</option>
                    ))
                  }
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
    </Container>
  )
}

export default PersonalInformation