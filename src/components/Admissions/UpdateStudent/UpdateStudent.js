import React from 'react'
import Header from '../../CustomComponents/Header'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectStudentApplicantsArray, removeStudentApplicant } from '../../../redux/Students/StudentsSelectors'

import CurrentSchoolPeriodBar from '../../CustomComponents/CurrentSchoolPeriodBar'
import SearchList from '../../CustomComponents/Search/SearchList'
import SearchBar from '../../CustomComponents/Search/SearchBar'

const UpdateStudent = ({ studentApplicants, removeStudentApplicant }) => {

  const handleDelete = (e, student) => {
    console.log(e, 'haha'*20, student)
    // return removeStudentApplicant(studentApplicants, student)
  }

  const actionList = {
    update: { label: 'Update' },
    delete: { label: 'Delete', handleClick: (a,b) => handleDelete(a,b) }
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
        include={['id', 'firstName', 'lastName', 'otherNames', 'gender', 'dateOfBirth', 'address', 'hometown', 'nationality']}
      />
    </Container>
  )
}
const mapStateToProps = createStructuredSelector({
  studentApplicants: selectStudentApplicantsArray
})

const mapDispatchToProps = dispatch => ({
  removeStudentApplicant: ({studentApplicants, studentApplicant}) => dispatch(removeStudentApplicant(studentApplicants, studentApplicant))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent)
