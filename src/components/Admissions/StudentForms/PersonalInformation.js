import React from 'react'
import { Col, Form, Container, Row } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import styles from '../../../stylesheets/Admissions.module.css'

const PersonalInformation = ({ personalInformation, handleChange, handleDateChange }) => {
  
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
                value={personalInformation.firstName} />
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
                value={personalInformation.lastName} />
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
                value={personalInformation.otherNames} />
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
                value={personalInformation.address} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='personalInfoDateOfBirth'>
            <Form.Label column sm='3'>Date of Birth</Form.Label>
            <Col sm='9'>
              <DatePicker 
                name='dateOfBirth'
                selected={personalInformation.dateOfBirth} 
                onChange={date => handleDateChange('dateOfBirth', date)} as={Form.Control} 
                maxDate={new Date()}
                minDate={new Date(99,12,8)}
                showMonthDropdown
                showYearDropdown
                isClearable
                dropdownMode='select'
                placeholderText='Select Date...'
                size='sm' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='personalInfoGender'>
            <Form.Label column sm='3'>Gender</Form.Label>
            <Col sm='9'>
              <fieldset onChange={handleChange} value={personalInformation.gender}>
                {
                  ['Male', 'Female', 'Other'].map((gender, idx) => (
                    <Form.Check key={`${gender}-${idx}`} size='sm' inline label={gender} type='radio' name='gender' value={gender} />
                  ))
                }
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
                value={personalInformation.hometown} />
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
                value={personalInformation.countryOfOrigin}>
                  {
                    ['Select Country...','Ghana', 'Ivory Coast', 'Burkina Faso', 'Togo', 'Nigeria', 'Other'].map((country, idx) => (
                      <option key={`${country}-${idx}`} value={idx === 0 ? '' : country} >{country}</option>
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
                value={personalInformation.religiousAffiliation} >
                  {
                    ['Select Religion...','Christian', 'Christian (Catholic)', 'Muslim', 'Budhist', 'Hindu', 'Other'].map((religion, idx) => (
                      <option key={`${religion}-${idx}`} value={idx === 0 ? '' : religion} >{religion}</option>
                    ))
                  }
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
                value={personalInformation.nameOfFormerSchool} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='personalInfoDisabilityStatus'>
            <Form.Label column sm='3'>Disability Status</Form.Label>
            <Col sm='9'>
              <fieldset onChange={handleChange} value={personalInformation.disabilityStatus}>
                {
                  ['Disabled', 'Not Disabled'].map((disabilityStatus, idx) => (
                    <Form.Check key={`${disabilityStatus}-${idx}`} size='sm' inline label={disabilityStatus} type='radio' name='disabilityStatus' value={disabilityStatus} />
                  ))
                }
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
                disabled={personalInformation.disabilityStatus === 'Disabled' ? false : true}
                value={personalInformation.disabilityInformation} />
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  )
}

export default PersonalInformation