import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import styles from '../../../stylesheets/CustomComponents.module.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const RegistrationInformation = ({formItems, handleChange, handleSubmit, saveInfo }) => {
  const { nameOfProxyWhoSubmittedApplication, dateOfApplicationSubmission } = formItems
  
  return (
    <Container fluid className={styles.studentInfoFormContainer}>
      <div className={styles.studentInfoForm}>
        <legend>Submission Details</legend>
        <hr className='mb-5' />
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
            {/* <Form.Control 
              name='dateOfApplicationSubmission'
              type='text'
              placeholder=''
              size="sm"
              onChange={handleChange}
              as={ReactDatePicker}
              selected={dateOfApplicationSubmission} /> */}
              <DatePicker selected={dateOfApplicationSubmission} onChange={handleChange} as={Form.Control} size='sm' />
          </Col>
        </Form.Group>
        <hr />
        <Form.Group controlId='registrationInfoCheckbox'>
          <Form.Check type='checkbox' label='As the person responsible for typing in the data, I confirm that the data is accurate to the best of my ability' />
        </Form.Group>
        <Form.Row>
          <Col>
            <Button className='btn-block' 
              variant='outline-primary' 
              href='#'
              data-rb-event-key='registrationInformation'
              onSubmit={saveInfo}
              role='tab'>
                Save
            </Button>
          </Col>
          <Col>
            <Button className='btn-block' 
              variant='primary' 
              type='submit'>
                Submit
            </Button>
          </Col>
        </Form.Row>
      </div>
    </Container>
  )
}

export default RegistrationInformation