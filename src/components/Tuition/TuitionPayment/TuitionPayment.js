import React, { Component } from 'react'

import { Container, Row, Col, Table, Button, } from 'react-bootstrap'

import Header from '../../CustomComponents/Header'
import SearchBar from '../../CustomComponents/Search/SearchBar'

import StudentNameList from '../../../tests/MOCK_DATA_Student_Names.json'

class TuitionPayment extends Component {
    constructor(props){
        super();
        this.state ={
            data: [],
            searchField: ''
        }
    }

    componentDidMount(){
        this.setState({data: StudentNameList});
    }

    handleChange = e => {
        this.setState({searchField: e.target.value});
    }
    
    render() {

        const { data, searchField } = this.state;
        const filteredData = data.filter(item => item.first_name.concat(' ',item.last_name).toLowerCase().includes(searchField))

        return (
            <Container fluid>
                <Header header='Pay School Fees' />
                <SearchBar placeholder='Enter Student Name' controlId='studentNameSearch' handleChange={this.handleChange} />
                <Row>
                    <Col>
                    <Table striped hover size='sm'>
                        <thead>
                        <tr>
                            <th>ID Number</th>
                            <th>Student Name</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            filteredData.map(({id, first_name, last_name}) => (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>
                                        {first_name} {last_name}
                                    </td>
                                    <td>
                                        <Button size='sm'>
                                            Pay Fees
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>      
                    </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
    
}

export default TuitionPayment;