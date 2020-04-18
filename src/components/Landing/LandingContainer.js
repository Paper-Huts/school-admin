import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Landing from 'Landing'

class LandingContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      summaryStats: [
        {id: '0', title: 'Current Number of Students', value: 118},
        {id: '1', title: 'Average Number of Students per Class', value: 16},
        {id: '2', title: 'Total Amount of School Fees Owed', value: 7000},
        {id: '3', title: 'Number of Students in Arrears', value: 30}
      ]
    }    
  }

  render() {
    const { summaryStats } = this.state
    return (
      <Container fluid>
        <Landing summaryStats={summaryStats} />
      </Container>
    )
  }
}