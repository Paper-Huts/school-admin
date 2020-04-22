import React from 'react'
import { Form, FormControl, Row } from 'react-bootstrap'

const SearchBar = ({ searchProps }) => (
  <Row>
    <Form>
      <FormControl type='text' placeholder={searchProps.placeholder} className='mr-sm-2' />
    </Form>
  </Row>
)

export default SearchBar