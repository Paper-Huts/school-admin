import React from 'react'

import { Container, Row, Col, Form } from 'react-bootstrap'

import Header from '../../CustomComponents/Header'
import SearchContainer from '../../CustomComponents/Search/SearchContainer'

const TuitionPayment = () => {
    
    return (
        <Container fluid>
            <Header header='Pay School Fees' />
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="studentSearch">
                            <Form.Control size="lg" type="text" placeholder="Enter student name" />
                        </Form.Group>
                    </Form>
                </Col>
                <SearchContainer />
            </Row>
        </Container>
    )
}

export default TuitionPayment;