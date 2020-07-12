import React, { Component } from 'react'
import { Container, Tab, Form, Row, Col, Nav } from 'react-bootstrap'
import _ from 'lodash'

import styles from '../../../stylesheets/Admissions.module.css'
import { addStudentApplicant } from '../../../redux/Students/StudentsActions'

import PersonalInformation from './PersonalInformation'
import GuardianInformation from './GuardianInformation'
import RegistrationInformation from './RegistrationInformation'
import CurrentSchoolPeriodBar from '../../CustomComponents/CurrentSchoolPeriodBar'
import { connect } from 'react-redux'

class StudentFormContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      otherNames: '',
      address: '',
      dateOfBirth: '',
      gender: '',
      hometown: '',
      nationality: '',
      religiousAffiliation: '',
      nameOfFormerSchool: '',
      disabilityStatus: false,
      disabilityInformation: '',
      g1FirstName: '',
      g1LastName: '',
      g1OtherNames: '',
      g1Relationship: '',
      g1Occupation: '',
      g1Address: '',
      g1PhoneNumber: '',
      g1AltPhoneNumber: '',
      g1CanPickUpFromSchool: '',
      g1PrimaryGuardian: true,
      nameOfProxyWhoSubmittedApplication: '',
      dateOfApplicationSubmission: new Date(),
      createdBy: props.currentUser,
      createdAt: new Date()
    }
  }

  // This function submits all the local state info to the student applicant info in the student reducer
  handleSubmit = e => {
    e.preventDefault()

    this.props.addStudentApplicant(this.state)
  }

  handleChange = e => {    
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  saveInfo = (e) => {
    e.preventDefault()
  }

  goToPrev = (e) => {
    e.preventDefault()
  }

  goToNext = (e) => {
    e.preventDefault()
  }

  render() {
    const formItems = this.state
    return (
      <Container fluid>
        <CurrentSchoolPeriodBar />
        <Tab.Container defaultActiveKey='personalInformation'>
          <Form onSubmit={this.handleSubmit} className={styles.newStudentForm}>
            <Row>
              <Col sm={12} md={2}>
                <Nav variant='pills' className='flex-column'>
                  {['Personal Information', 'Guardian Information', 'Registration Information'].map(navItem => (
                    <Nav.Item>
                      <Nav.Link eventKey={_.camelCase(navItem)}>{navItem}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col sm={12} md={10}>
                <Tab.Content>
                  <Tab.Pane eventKey='personalInformation'>
                    <PersonalInformation formItems={formItems} handleChange={this.handleChange} saveInfo={this.saveInfo} goToNext={this.goToNext} />
                  </Tab.Pane>
                  <Tab.Pane eventKey='guardianInformation'>
                    <GuardianInformation formItems={formItems} handleChange={this.handleChange} saveInfo={this.saveInfo} goToPrev={this.goToPrev} goToNext={this.goToNext} />
                  </Tab.Pane>
                  <Tab.Pane eventKey='registrationInformation'>
                    <RegistrationInformation formItems={formItems} handleChange={this.handleChange} saveInfo={this.saveInfo} goToPrev={this.goToPrev}  />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Form>
        </Tab.Container>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addStudentApplicant: student => dispatch(addStudentApplicant(student))
}) 

export default connect(null, mapDispatchToProps)(StudentFormContainer)