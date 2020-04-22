import React, { Component, Fragment } from 'react'
import ApplicationPeriodBar from './ApplicationPeriodBar'
import StudentApplications from './StudentApplications'
import Header from '../CustomComponents/Header'
import { Container } from 'react-bootstrap'

class StudentApplicationsContainer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      header: 'Student Applications',
      options: [
        {id: 0, title: 'New Student', path: '/applications/new_student'},
        {id: 1, title: 'Update Student Info', path: '/applications/update_student'}
      ],
      data: {
        period: [
          {id: 0, title: 'Academic Year', value: '2019/2020'},
          {id: 1, title: 'Current Term', value: 3},
          {id: 2, title: 'Date', value: 'April 1st, 2020'}
        ]
      }
    }
  }

  render() {
    const { header, options, data } = this.state
    return (
      <Container fluid>
        <Header header={header} />
        <ApplicationPeriodBar period={data.period} />
        <StudentApplications options={options} />
      </Container>
    )
  }
}

export default StudentApplicationsContainer