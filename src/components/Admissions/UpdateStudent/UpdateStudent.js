import React from 'react'
import Header from '../../CustomComponents/Header'
import { Container } from 'react-bootstrap'
import SearchContainer from '../../CustomComponents/Search/SearchContainer'
import CurrentSchoolPeriodBar from '../../CustomComponents/CurrentSchoolPeriodBar'

const UpdateStudent = ({data}) => (
  <Container fluid>
    <Header header='Update Student Info' />
    <CurrentSchoolPeriodBar />
    <SearchContainer
      placeholder='Search Student Applicants'
    />
  </Container>
)

export default UpdateStudent