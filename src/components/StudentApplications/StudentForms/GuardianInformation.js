import React, { Component } from 'react'
import { Row, Col, Form, Container } from 'react-bootstrap'
import styles from '../../../stylesheets/CustomComponents.module.css'

class GuardianInformation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      otherNames: '',
      relationship: '',
      occupation: '',
      address: '',
      phoneNumber: '',
      altPhoneNumber: '',
      canPickUpFromSchool: '',
      primaryGuardian: true
    }
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  handleChange = e => {    
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render() {
    const {firstName, lastName, otherNames, relationship, occupation, address, 
      phoneNumber, altPhoneNumber, canPickUpFromSchool, primaryGuardian} = this.state
    
    return (
      <Container className={styles.studentInfoFormContainer}>
        <Form className={styles.studentInfoForm}>
          <legend>Guardian #1</legend>
          <hr className='mb-5' />
          <Form.Group as={Row} controlId='guardianInfoFirstName'>
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
          <Form.Group as={Row} controlId='guardianInfoLastName'>
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
          <Form.Group as={Row} controlId='guardianInfootherNames'>
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
          <Form.Group as={Row} controlId='guardianInfoRelationship'>
            <Form.Label column sm='2'>Relationship</Form.Label>
            <Col sm='10'>
              <Form.Control 
                name='relationship'
                as='select'
                placeholder=''
                size="sm"
                onChange={this.handleChange}
                value={relationship} >
                <option>Father</option>
                <option>Mother</option>
                <option>Brother</option>
                <option>Sister</option>
                <option>Other</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='guardianInfoOccupation'>
            <Form.Label column sm='2'>Occupation</Form.Label>
            <Col sm='10'>
              <Form.Control 
                name='occupation'
                type='text'
                placeholder=''
                size="sm"
                onChange={this.handleChange}
                value={occupation} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='guardianInfoAddress'>
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
          <Form.Group as={Row} controlId='guardianInfoPhoneNumber'>
            <Form.Label column sm='2'>Phone Number</Form.Label>
            <Col sm='10'>
              <Form.Control 
                name='phoneNumber'
                type='text'
                placeholder=''
                size="sm"
                onChange={this.handleChange}
                value={phoneNumber} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='guardianInfoAltPhoneNumber'>
            <Form.Label column sm='2'>Alternative Phone Number</Form.Label>
            <Col sm='10'>
              <Form.Control 
                name='altPhoneNumber'
                type='text'
                placeholder=''
                size="sm"
                onChange={this.handleChange}
                value={altPhoneNumber} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='guardianInfoCanPickUp'>
            <Form.Label column sm='2'>Can pick up child (from School)?</Form.Label>
            <Col sm='10'>
              <fieldset>
                <Form.Check size="sm" inline label='Yes' type='radio' name='canPickUpFromSchool' />
                <Form.Check size="sm" inline label='No' type='radio' name='canPickUpFromSchool' />
              </fieldset>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='guardianInfoPrimaryGuardian'>
            <Form.Label column sm='2'>Primary Guardian?</Form.Label>
            <Col sm='10'>
              <fieldset>
                <Form.Check size="sm" inline label='Yes' type='radio' name='primaryGuardian' />
                <Form.Check size="sm" inline label='No' type='radio' name='primaryGuardian' />
              </fieldset>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

// const GuardianInformation = ({ items }) => (
//   <Container fluid className={styles.studentInfoForm}>
//     <Form>
//       <h3>Guardian 1</h3>
//       <Form.Row>
//         <Col>
//           <Form.Group>
//             <Form.Label>First Name</Form.Label>
//             <Form.Control type='text' />
//           </Form.Group>
//         </Col>
//         <Col>
//           <Form.Group>
//             <Form.Label>Last Name</Form.Label>
//             <Form.Control type='text' />
//           </Form.Group>
//         </Col>
//         <Col>
//           <Form.Group>
//             <Form.Label>Other Names</Form.Label>
//             <Form.Control type='text' />
//           </Form.Group>
//         </Col>
//       </Form.Row>
//       <Form.Row>
//         <Col>
//           <Form.Group>
//             <Form.Label>Relationship</Form.Label>
//             <Form.Control as='select'>
//               <option>Mother</option>
//               <option>Father</option>
//               <option>Brother</option>
//               <option>Sister</option>
//               <option>Other</option>
//             </Form.Control>
//           </Form.Group>
//         </Col>
//         <Col>
//           <Form.Group>
//             <Form.Label>Occupation</Form.Label>
//             <Form.Control as='select'>
//               <option>Doctor</option>
//               <option>Chemist</option>
//               <option>Bus Driver</option>
//               <option>Software Engineer</option>
//               <option>Other</option>
//             </Form.Control>
//           </Form.Group>
//         </Col>
//       </Form.Row>
//       <Form.Row>
//         <Col>
//           <Form.Group>
//             <Form.Label>Address</Form.Label>
//             <Form.Control type='text' />
//           </Form.Group>
//         </Col>
//       </Form.Row>
//       <Form.Row>
//         <Col>
//           <Form.Group>
//             <Form.Label>Telephone Number</Form.Label>
//             <Form.Control type='text' />
//           </Form.Group>
//         </Col>
//         <Col>
//           <Form.Group>
//             <Form.Label>Can Pick Up Child (from School)?</Form.Label>
//             <fieldset>
//               <Form.Check inline label='Yes' type='radio' name='childPickUp' />
//               <Form.Check inline label='No' type='radio' name='childPickUp' />
//             </fieldset>
//           </Form.Group>
//         </Col>
//       </Form.Row>
//     </Form>
//   </Container>
// )

export default GuardianInformation