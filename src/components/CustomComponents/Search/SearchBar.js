import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

const SearchBar = ({ placeholder, controlId, handleChange }) => (
  <Row>
    <Col>   
      <Form>
          <Form.Group controlId={controlId}>
              <Form.Control size="lg" type="text" placeholder={placeholder} onChange={handleChange} />
          </Form.Group>
      </Form>
    </Col> 
  </Row>
)

export default SearchBar