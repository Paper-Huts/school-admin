import React from 'react'
import Header from '../../CustomComponents/Header'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectStudentApplicantsArray } from '../../../redux/Students/StudentsSelectors'

import CurrentSchoolPeriodBar from '../../CustomComponents/CurrentSchoolPeriodBar'
import SearchList from '../../CustomComponents/Search/SearchList'
import SearchBar from '../../CustomComponents/Search/SearchBar'
import { removeStudentApplicant } from '../../../redux/Students/StudentUtils'

const UpdateStudent = ({ studentApplicants, removeStudentApplicant }) => {

  const handleDelete = studentApplicant => {
    return removeStudentApplicant(studentApplicant)
  }

  const actionList = {
    update: { label: 'Update' },
    delete: { label: 'Delete', onClick: handleDelete }
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
        include={['firstName', 'lastName', 'otherNames', 'gender', 'dateOfBirth', 'address', 'hometown', 'nationality']}
      />
    </Container>
  )
}
const mapStateToProps = createStructuredSelector({
  studentApplicants: selectStudentApplicantsArray
})

const mapDispatchToProps = dispatch => ({
  removeStudentApplicant: studentApplicant => dispatch(removeStudentApplicant(studentApplicant))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent)