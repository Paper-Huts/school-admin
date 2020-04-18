import React from 'react'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Tuition = ({ summaryStats }) => (
  <Container>
    <h1>School Fees Payment</h1>
    <hr />
    <br />
    <Row>
    { summaryStats.map(
      ({ id, value, title }) =>
      (<Col className='SummaryStats' key={id}>
        <h1>{ value }</h1>
        <h3>{ title }</h3>
      </Col>)
    ) }
    </Row>
    <br />
    <Row>
      <Col><Button variant="secondary">Pay School Fees</Button></Col>
      <Col><Button variant="secondary">Payment History</Button></Col>
    </Row>
    <br />
    <h3>School Fees Information</h3>
    <hr />
    <br />
    <Row>
      <Col>
        <h4>Nuersery & KG</h4>
        <ul>
          <li>Tuition - GHC 200</li>
          <li>Book & Stationery - GHC 50</li>
          <li>Toiletries - GHC 50</li>
        </ul>
      </Col>
      <Col>
        <h4>Primary School</h4>
        <ul>
          <li>Tuition - GHC 250</li>
          <li>Book & Stationery - GHC 70</li>
          <li>Toiletries - GHC 20</li>
        </ul>
      </Col>
    </Row>
  </Container>
)

export default Tuition;