import React, { Component } from 'react'
import Header from '../CustomComponents/Header'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectAdmissionStats } from '../../redux/SchoolStats/SchoolStatsSelectors'
import CurrentSchoolPeriodBar from '../CustomComponents/CurrentSchoolPeriodBar'
import SubHeader from '../CustomComponents/SubHeader'
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
        <SubHeader subHeader="Admissions Statistics" />
        <Row>
          {
            this.props.admissionStats.map(item => (
              <div>
                <Col>{item.title}</Col>
                <Col>{item.value}</Col>
              </div>
            ))
          }
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  admissionStats: selectAdmissionStats
})

export default connect(mapStateToProps)(AdmissionsContainer)