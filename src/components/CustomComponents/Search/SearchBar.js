import React from 'react'
import { Form, FormControl, Row, Col } from 'react-bootstrap'

const SearchBar = ({ placeholder, controlId }) => (
  <Row>
    <Col>   
      <Form>
          <Form.Group controlId={controlId}>
              <Form.Control size="lg" type="text" placeholder={placeholder} />
          </Form.Group>
      </Form>
    </Col> 
  </Row>
)

export default SearchBar