import React, { Component } from 'react'

import { Container } from 'react-bootstrap'

import Header from '../CustomComponents/Header'
import TableList from '../CustomComponents/Lists/TableList'
import CurrentSchoolPeriodBar from '../CustomComponents/CurrentSchoolPeriodBar'

class StaffContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      header: 'Staff',
      staff: [
        { id: 1, name: 'Kweku Boampong', start_date: '12/2/2018' },
        { id: 2, name: 'Janet Antwi', start_date: '12/2/2018' },
        { id: 3, name: 'Samuel Adorkor', start_date: '12/2/2008' },
        { id: 4, name: 'Dan Dandin', start_date: '12/4/2010' },
      ]
    }
  }
  
  render() {
    const { header, staff } = this.state
    return (
      <Container fluid>
        <Header header={header} />
        <CurrentSchoolPeriodBar />
        <TableList data={staff} />
      </Container>
    )
  }
}

export default StaffContainer