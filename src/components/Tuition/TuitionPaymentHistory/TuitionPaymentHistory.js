import React from 'react'

import { Container, Row, Col, Form } from 'react-bootstrap'

const TuitionPaymentHistory = () => {
    
    return (
        <Container>
            <h1>Payment History</h1>
            <hr />
            <br />
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