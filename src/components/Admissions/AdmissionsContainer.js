import React, { Component } from 'react'
import Header from '../CustomComponents/Header'
import { Container } from 'react-bootstrap'
import CurrentSchoolPeriodBar from '../CustomComponents/CurrentSchoolPeriodBar'
import Admissions from './Admissions'

class AdmissionsContainer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      header: 'Admissions',
      options: [
        {id: 0, title: 'New Student Application', path: '/admissions/new_student'},
        {id: 1, title: 'Update Student Info', path: '/admissions/update_student'}
      ]
    }
  }

  render() {
    const { header, options } = this.state
    return (
      <Container fluid>
        <Header header={header} />
        <CurrentSchoolPeriodBar />
        <Admissions options={options} />
      </Container>
    )
  }
}

export default AdmissionsContainer