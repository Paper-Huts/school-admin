import React from 'react'

import { Container, Row, Col, Form } from 'react-bootstrap'

const TuitionPayment = () => {
    
    return (
        <Container>
            <h1>Pay School Fees</h1>
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

export default TuitionPayment;