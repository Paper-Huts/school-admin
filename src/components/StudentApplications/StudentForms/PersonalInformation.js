import React, { Fragment } from 'react'
import { Col, Form, Container, Button, Row } from 'react-bootstrap'
import styles from '../../../stylesheets/CustomComponents.module.css'

const PersonalInformation = ({ items }) => (
  <Fragment>
    <Container className={styles.studentInfoForm}>
      <Form>
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
              <Form.Label>Address</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <fieldset>
                <Form.Check inline label='Male' type='radio' name='gender' />
                <Form.Check inline label='Female' type='radio' name='gender' />
              </fieldset>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Hometown</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Nationality</Form.Label>
              <Form.Control as='select'>
                <option>Ghanaian</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Religious Affiliation</Form.Label>
              <Form.Control as='select'>
                <option>Christian</option>
                <option>Christian/Catholic</option>
                <option>Budhist</option>
                <option>Hindu</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Former School</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
              <Form.Group>
                <Form.Label>Disability Status</Form.Label>
                <fieldset>
                  <Form.Check inline label='Disabled' type='radio' name='gender' />
                  <Form.Check inline label='Not Disabled' type='radio' name='gender' />
                </fieldset>
              </Form.Group>
            </Col>
          <Col>
            <Form.Group>
              <Form.Label>Disability Status</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
    </Container>
    <Row>
      <Col md={{offset: 9, span: 3}}>
        <Button className='btn-block' variant='outline-primary'>Next</Button>
      </Col>
    </Row>
  </Fragment>
)

export default PersonalInformation