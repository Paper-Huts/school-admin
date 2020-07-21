import React from 'react'
import Header from '../../CustomComponents/Headers/Header'
import { Container } from 'react-bootstrap'
import StudentFormContainer from '../StudentForms/StudentFormContainer'

const NewStudent = ({data}) => (
  <Container fluid>
    <Header header='New Student' />
    <StudentFormContainer />
  </Container>
)

export default NewStudent