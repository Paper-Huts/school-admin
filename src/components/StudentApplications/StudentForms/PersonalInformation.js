import React, { Fragment, Component } from 'react'
import { Col, Form, Container, Button, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import styles from '../../../stylesheets/CustomComponents.module.css'
import { selectCurrentUser } from '../../../redux/User/UserSelectors'

class PersonalInformation extends Component {
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
      createdBy: props.currentUser,
      createdAt: ''
    }
  }

  handleChange = e => {    
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render() {
    const { firstName, lastName, otherNames, address, dateOfBirth, 
      gender, hometown, nationality, religiousAffiliation, nameOfFormerSchool, 
      disabilityStatus, disabilityInformation, createdBy, createdAt } = this.state
    return (
      <Fragment>
        <Container className={styles.studentInfoFormContainer}>
          <Form className={styles.studentInfoForm}>
            <Form.Group as={Row} controlId='studentApplicantFirstName'>
              <Form.Label column sm='2'>First Name</Form.Label>
              <Col sm='10'>
                <Form.Control 
                  name='firstName'
                  type='text'
                  placeholder=''
                  size="sm"
                  onChange={this.handleChange}
                  value={firstName} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='studentApplicantLastName'>
              <Form.Label column sm='2'>Last Name</Form.Label>
              <Col sm='10'>
                <Form.Control 
                  name='lastName'
                  type='text'
                  placeholder=''
                  size="sm"
                  onChange={this.handleChange}
                  value={lastName} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='studentApplicantotherNames'>
              <Form.Label column sm='2'>Other Names</Form.Label>
              <Col sm='10'>
                <Form.Control 
                  name='otherNames'
                  type='text'
                  placeholder=''
                  size="sm"
                  onChange={this.handleChange}
                  value={otherNames} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='studentApplicantAddress'>
              <Form.Label column sm='2'>Address</Form.Label>
              <Col sm='10'>
                <Form.Control 
                  name='address'
                  type='text'
                  placeholder=''
                  size="sm"
                  onChange={this.handleChange}
                  value={address} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='studentApplicantDateOfBirth'>
              <Form.Label column sm='2'>Date of Birth</Form.Label>
              <Col sm='10'>
                <Form.Control 
                  name='dateOfBirth'
                  type='text'
                  placeholder=''
                  size="sm"
                  onChange={this.handleChange}
                  value={dateOfBirth} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='studentApplicantGender'>
              <Form.Label column sm='2'>Gender</Form.Label>
              <Col sm='10'>
                <fieldset name='gender'>
                  <Form.Check inline label='Male' type='radio' />
                  <Form.Check inline label='Female' type='radio' />
                </fieldset>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='studentApplicantHometown'>
              <Form.Label column sm='2'>Hometown</Form.Label>
              <Col sm='10'>
                <Form.Control 
                  name='hometown'
                  type='text'
                  placeholder=''
                  size="sm"
                  onChange={this.handleChange}
                  value={hometown} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='studentApplicantNationality'>
              <Form.Label column sm='2'>Nationality</Form.Label>
              <Col sm='10'>
                <Form.Control 
                  name='nationality'
                  as='select'
                  size="sm"
                  onChange={this.handleChange}
                  value={nationality}>
                  <option>Ghanaian</option>
                  <option>Other</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='studentApplicantReligiousAffiliation'>
              <Form.Label column sm='2'>Religious Affiliation</Form.Label>
              <Col sm='10'>
                <Form.Control 
                  name='religiousAffiliation'
                  as='select'
                  placeholder='Select a Religion'
                  size="sm"
                  onChange={this.handleChange}
                  value={religiousAffiliation} >
                  <option>Christian</option>
                  <option>Christian/Catholic</option>
                  <option>Budhist</option>
                  <option>Hindu</option>
                  <option>Other</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='studentApplicantNameOfFormerSchool'>
              <Form.Label column sm='2'>Name of Former School</Form.Label>
              <Col sm='10'>
                <Form.Control 
                  name='nameOfFormerSchool'
                  type='text'
                  placeholder=''
                  size="sm"
                  onChange={this.handleChange}
                  value={nameOfFormerSchool} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='studentApplicantDisabilityStatus'>
              <Form.Label column sm='2'>Disability Status</Form.Label>
              <Col sm='10'>
                <fieldset>
                  <Form.Check size="sm" inline label='Disabled' type='radio' name='gender' />
                  <Form.Check size="sm" inline label='Not Disabled' type='radio' name='gender' />
                </fieldset>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='studentApplicantDisabilityInformation'>
              <Form.Label column sm='2'>Disability Information</Form.Label>
              <Col sm='10'>
                <Form.Control 
                  name='disabilityInformation'
                  type='text'
                  placeholder=''
                  size="sm"
                  onChange={this.handleChange}
                  value={disabilityInformation} />
              </Col>
            </Form.Group>
            <Button className='btn-block' 
              variant='outline-primary' 
              href='#'
              data-rb-event-key='guardianInformation'
              role='tab'>
                Next
            </Button>
          </Form>
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(PersonalInformation)