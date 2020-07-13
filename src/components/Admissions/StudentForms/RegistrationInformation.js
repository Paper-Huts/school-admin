import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import styles from '../../../stylesheets/CustomComponents.module.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const RegistrationInformation = ({formItems, handleChange, handleDateChange }) => {
  const { nameOfProxyWhoSubmittedApplication, dateOfApplicationSubmission } = formItems
  
  return (
    <Container fluid className={styles.studentInfoFormContainer}>
      <legend>Submission Details</legend>
      <hr className='mb-5' />
      <Container>
        <Col>
          <Form.Group as={Row} controlId='registrationInfoNameOfProxyWhoSubmittedApplication'>
            <Form.Label column sm='4'>Name of Person Who Submitted the Original Application</Form.Label>
            <Col sm='8'>
              <Form.Control 
                name='nameOfProxyWhoSubmittedApplication'
                type='text'
                placeholder=''
                size="sm"
                onChange={handleChange}
                value={nameOfProxyWhoSubmittedApplication} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='registrationDate'>
            <Form.Label column sm='4'>When was the Application Submitted?</Form.Label>
            <Col sm='8'>
              <DatePicker 
                name='dateOfApplicationSubmission'
                selected={dateOfApplicationSubmission} 
                onChange={date => handleDateChange('dateOfApplicationSubmission', date)} as={Form.Control} 
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
          <hr />
          <Form.Group controlId='registrationInfoCheckbox'>
            <Form.Check type='checkbox' label='As the person responsible for typing in the data, I confirm that the data is accurate to the best of my ability' />
          </Form.Group>
          <Form.Row>
            <Col sm={12} md={6} lg={3}>
              <Button className='btn-block' 
                variant='primary' 
                type='submit'>
                  Submit
              </Button>
            </Col>
          </Form.Row>
        </Col>
      </Container>
    </Container>
  )
}

export default RegistrationInformation