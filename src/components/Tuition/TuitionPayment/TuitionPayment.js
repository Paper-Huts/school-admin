import React from 'react'

import { Container, Row, Col, Form, Table, Button, } from 'react-bootstrap'

import Header from '../../CustomComponents/Header'
import SearchBar from '../../CustomComponents/Search/SearchBar'

import StudentNameList from '../../../tests/MOCK_DATA_Student_Names.json'

const TuitionPayment = () => {

    let data = StudentNameList
    
    return (
        <Container fluid>
            <Header header='Pay School Fees' />
            <SearchBar placeholder='Enter Student Name' controlId='studentNameSearch' />
            <Row>
                <Col>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(({id, first_name, last_name}) => (
                        <tr key={id}>
                        <td>
                            {first_name} {last_name}
                        </td>
                        <td>
                            <Button>
                                Pay Fees
                            </Button>
                        </td>
                        </tr>
                    ))}
                    </tbody>      
                </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default TuitionPayment;