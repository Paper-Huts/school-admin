import React from 'react'

import { Container, Row, Col, Form } from 'react-bootstrap'

import StudentNameList from '../../../tests/MOCK_DATA_Student_Names.json'

import Header from '../../CustomComponents/Header'
import SearchList from '../../CustomComponents/Search/SearchList'
import SearchBar from '../../CustomComponents/Search/SearchBar'

const TuitionPayment = () => {

    let data = StudentNameList
    
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
                {/* <Col>
                    <SearchBar searchProps='Enter student name' />
                </Col> */}
            </Row>
        </Container>
    )
}

export default TuitionPayment;