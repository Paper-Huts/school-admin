import { StudentActionTypes } from './StudentsTypes'
import { selectCurrentUser } from '../User/UserSelectors'

const INITIAL_STATE = {
  studentApplicants: [
    { 
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
      g1FirstName: '',
      g1LastName: '',
      g1OtherNames: '',
      g1Relationship: '',
      g1Occupation: '',
      g1Address: '',
      g1PhoneNumber: '',
      g1AltPhoneNumber: '',
      g1CanPickUpFromSchool: '',
      g1PrimaryGuardian: true,
      nameOfProxyWhoSubmittedApplication: '',
      dateOfApplicationSubmission: '',
      endorserFirstName: '',
      endorserLastName: '',
      endorserOtherNames: '',
      dateSigned: '',
      createdBy: selectCurrentUser,
      createdAt: ''
    }
  ]
}

const studentsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case StudentActionTypes.ADD_STUDENT_APPLICANT:
      return {
        ...state,
        studentApplicants: [...state.studentApplicants, 
          { ...action.payload, date_created: 'today' }
        ]
      }
    default:
      return state
  }
}

export default studentsReducer