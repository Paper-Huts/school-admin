import React from 'react'
import Header from '../../CustomComponents/Header'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectStudentApplicantsArray } from '../../../redux/Students/StudentsSelectors'

import CurrentSchoolPeriodBar from '../../CustomComponents/CurrentSchoolPeriodBar'
import SearchList from '../../CustomComponents/Search/SearchList'
import SearchBar from '../../CustomComponents/Search/SearchBar'

const UpdateStudent = ({ studentApplicants }) => {

  const actionList = {
    update: { label: 'Update' },
    delete: { label: 'Delete' }
  }

  return (
    <Container fluid>
      <Header header='Update Student Info' />
      <CurrentSchoolPeriodBar />
      <SearchBar
        placeholder='Search Student Applicants'
      />
      <SearchList
        data={studentApplicants}
        actions={actionList}
        include={['firstName', 'lastName', 'otherNames']}
        // exclude={['firstName', 'address']}
      />
    </Container>
  )
}
const mapStateToProps = createStructuredSelector({
  studentApplicants: selectStudentApplicantsArray
})

export default connect(mapStateToProps)(UpdateStudent)