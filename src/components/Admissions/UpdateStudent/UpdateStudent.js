import React from 'react'
import Header from '../../CustomComponents/Header'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectStudentApplicants } from '../../../redux/Students/StudentsSelectors'

import CurrentSchoolPeriodBar from '../../CustomComponents/CurrentSchoolPeriodBar'
import SearchList from '../../CustomComponents/Search/SearchList'
import SearchBar from '../../CustomComponents/Search/SearchBar'

const UpdateStudent = ({ studentApplicants }) => (
  <Container fluid>
    <Header header='Update Student Info' />
    <CurrentSchoolPeriodBar />
    <SearchBar
      placeholder='Search Student Applicants'
    />
    <SearchList
      data={studentApplicants}
      buttonList={[{label: 'Update'}, {label: 'Delete'}]}
    />
  </Container>
)

const mapStateToProps = createStructuredSelector({
  studentApplicants: selectStudentApplicants
})

export default connect(mapStateToProps)(UpdateStudent)