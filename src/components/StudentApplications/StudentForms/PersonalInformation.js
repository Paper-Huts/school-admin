import React from 'react'
import { Col, Form } from 'react-bootstrap'

const PersonalInformation = ({ items }) => (
  <Form>
    <Form.Row>
      <Form.Group>
        <Form.Label>{items.firstName.label}</Form.Label>
        <Form.Control type={items.firstName.type} />
      </Form.Group>
    </Form.Row>
  </Form>
)

export default PersonalInformation