import React from 'react'

import { Container, Row, Col, Form } from 'react-bootstrap'

import Header from '../../CustomComponents/Header'

const TuitionPaymentHistory = () => {
    
    return (
        <Container fluid>
            <Header header='Payment History'/>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="studentSearch">
                            <Form.Control size="lg" type="text" placeholder="Enter student name" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>            
        </Container>
    )
}

export default TuitionPaymentHistory;