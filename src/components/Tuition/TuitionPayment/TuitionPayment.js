import React from 'react'

import { Container, Row, Col, Form } from 'react-bootstrap'

import Header from '../../CustomComponents/Header'
import SearchList from '../../CustomComponents/Search/SearchList'
import SearchBar from '../../CustomComponents/Search/SearchBar'

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
                <SearchBar searchProps='Enter student name' />
                <SearchList />
            </Row>
        </Container>
    )
}

export default TuitionPayment;