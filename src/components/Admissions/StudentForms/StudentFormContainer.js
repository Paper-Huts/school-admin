import React, { Component, Fragment } from 'react'
import { Container, Tabs, Tab, Form } from 'react-bootstrap'

import styles from '../../../stylesheets/CustomComponents.module.css'
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
      endorserFirstName: '',
      endorserLastName: '',
      endorserOtherNames: '',
      dateSigned: new Date(),
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
      <Fragment>
        <CurrentSchoolPeriodBar />
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Tabs defaultActiveKey='personalInformation' className={styles.tabs + ' nav-justified'} variant='pills' transition={false}>
              <Tab eventKey='personalInformation' title='Personal Information'>
                <PersonalInformation formItems={formItems} handleChange={this.handleChange} saveInfo={this.saveInfo} goToNext={this.goToNext} />
              </Tab>
              <Tab eventKey='guardianInformation' title='Guardian Information'>
                <GuardianInformation formItems={formItems} handleChange={this.handleChange} saveInfo={this.saveInfo} goToPrev={this.goToPrev} goToNext={this.goToNext} />
              </Tab>
              <Tab eventKey='registrationInformation' title='Registration Information'>
                <RegistrationInformation formItems={formItems} handleChange={this.handleChange} saveInfo={this.saveInfo} goToPrev={this.goToPrev}  />
              </Tab>
            </Tabs>
          </Form>
        </Container>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addStudentApplicant: student => dispatch(addStudentApplicant(student))
}) 

export default connect(null, mapDispatchToProps)(StudentFormContainer)