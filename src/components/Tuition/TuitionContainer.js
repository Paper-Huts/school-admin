import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import Tution from './Tuition'

class LandingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      summaryStats: [
        {id: '2', title: 'Total Amount of School Fees Owed', value: 7000},
        {id: '3', title: 'Number of Students in Arrears', value: 30}
      ]
    }    
  }

  render() {

    const { summaryStats } = this.state

    return (
      <Container fluid>
        <Tution summaryStats={summaryStats} />
      </Container>
    )
  }
}

export default LandingContainer;