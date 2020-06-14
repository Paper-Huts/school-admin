import { StudentActionTypes } from './StudentsActions'

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
      formerSchool: '',
      disabilityStatus: null,
      disabilityInfo: '',
      dateCreated: null,
      dateUpdated: null,
      createdBy: null,
      updatedBy: null
    }
  ]
}

const studentsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_STUDENT_APPLICANT':
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