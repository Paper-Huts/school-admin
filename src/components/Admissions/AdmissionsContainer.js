import React, { Component } from 'react'
import { Container} from 'react-bootstrap'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { addStudentApplicant } from '../../redux/Students/StudentsActions'
import { selectAdmissionStats } from '../../redux/SchoolStats/SchoolStatsSelectors'
import CurrentSchoolPeriodBar from '../CustomComponents/CurrentSchoolPeriodBar'
import Header from '../CustomComponents/Headers/Header'
import Admissions from './Admissions'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

class AdmissionsContainer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      header: 'Admissions',
      options: [
        {id: 0, title: 'New Student Application', path: '/admissions/new_student'},
        {id: 1, title: 'Update Student Info', path: '/admissions/update_student'}
      ]
    }
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { addStudentApplicant } = this.props
    const studentApplicantsRef = firestore.collection('studentApplicants')

    this.unsubscribeFromSnapshot = studentApplicantsRef.onSnapshot(async snapshot => {
      const studentApplicant = convertCollectionsSnapshotToMap(snapshot)
      addStudentApplicant(studentApplicant)
    })
  }

  render() {
    const { header, options } = this.state

    return (
      <Container fluid>
        <Header header={header} />
        <CurrentSchoolPeriodBar />
        <Admissions options={options} />
      </Container>
    )
  }
}
 
const mapStateToProps = createStructuredSelector({
  admissionStats: selectAdmissionStats
})

const mapDispatchToProps = dispatch => ({
  addStudentApplicant: studentApplicant => dispatch(addStudentApplicant(studentApplicant))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdmissionsContainer)