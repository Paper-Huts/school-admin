import React from 'react'
import { Col, Form, Container } from 'react-bootstrap'
import styles from '../../../stylesheets/CustomComponents.module.css'

const GuardianInformation = ({ items }) => (
  <Container fluid className={styles.studentInfoForm}>
    <Form>
      <h3>Guardian 1</h3>
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Other Names</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Label>Relationship</Form.Label>
            <Form.Control as='select'>
              <option>Mother</option>
              <option>Father</option>
              <option>Brother</option>
              <option>Sister</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Occupation</Form.Label>
            <Form.Control as='select'>
              <option>Doctor</option>
              <option>Chemist</option>
              <option>Bus Driver</option>
              <option>Software Engineer</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Label>Telephone Number</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Can Pick Up Child (from School)?</Form.Label>
            <fieldset>
              <Form.Check inline label='Yes' type='radio' name='childPickUp' />
              <Form.Check inline label='No' type='radio' name='childPickUp' />
            </fieldset>
          </Form.Group>
        </Col>
      </Form.Row>
    </Form>
  </Container>
)

export default GuardianInformation