import React from 'react'
import Header from '../../CustomComponents/Header'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectStudentApplicantsArray } from '../../../redux/Students/StudentsSelectors'

import CurrentSchoolPeriodBar from '../../CustomComponents/CurrentSchoolPeriodBar'
import TableList from '../../CustomComponents/Lists/TableList'
import SearchBar from '../../CustomComponents/Search/SearchBar'
import { removeStudentApplicant } from '../../../redux/Students/StudentUtils'

const UpdateStudent = ({ studentApplicants, removeStudentApplicant }) => {

  const handleDelete = (e, student) => {
    e.preventDefault()
    console.log(e, 'haha'*20, student)
    // return removeStudentApplicant(studentApplicants, student)
  }

  const handleUpdate = (e, student) => {
    e.preventDefault()
    alert('Update Function not yet implemented!')
    console.log(student)
  }

  const actionList = {
    update: { label: 'Update', onClick: handleUpdate },
    delete: { label: 'Delete', onClick: handleDelete }
  }

  return (
    <Container fluid>
      <Header header='Update Student Info' />
      <CurrentSchoolPeriodBar />
      <SearchBar
        placeholder='Search functionality currently not available for this table!!'
      />
      <TableList
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
  removeStudentApplicant: ({studentApplicants, studentApplicant}) => dispatch(removeStudentApplicant(studentApplicants, studentApplicant))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent)
