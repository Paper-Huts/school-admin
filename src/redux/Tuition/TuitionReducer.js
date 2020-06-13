import { TuitionActionTypes } from './TuitionTypes'

const INITIAL_STATE = {
  tuitionByGradeLevel: [
    {
      "id": 0,
      "schoolPeriodId": "",
      "gradeLevel": "Nursery 1",
      "costOfTuition": 200,
      "costOfBooksAndStationery": 50,
      "costOfMiscItems":20,
      "totalTuition": 270,
      "createdAt": "",
      "createdBy": "",
      "timestamp": ""
    },
    {
      "id": 1,
      "schoolPeriodId": "",
      "gradeLevel": "Nursery 2",
      "costOfTuition": 200,
      "costOfBooksAndStationery": 50,
      "costOfMiscItems":20,
      "totalTuition": 270,
      "createdAt": "",
      "createdBy": "",
      "timestamp": ""
    },
    {
      "id": 3,
      "schoolPeriodId": "",
      "gradeLevel": "Primary 1",
      "costOfTuition": 250,
      "costOfBooksAndStationery": 50,
      "costOfMiscItems":20,
      "totalTuition": 320,
      "createdAt": "",
      "createdBy": "",
      "timestamp": ""
    },
  ]
}

const tuitionReducer = (state = INITIAL_STATE, action) => {
  switch (TuitionActionTypes) {
    default:
      return state
  }
}

export default tuitionReducer;