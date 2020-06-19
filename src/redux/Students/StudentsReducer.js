import { StudentActionTypes } from "./StudentsTypes";

const INITIAL_STATE = {
  studentApplicants: [
    {
      firstName: "",
      lastName: "",
      otherNames: "",
      address: "",
      dateOfBirth: "",
      gender: "",
      hometown: "",
      nationality: "",
      religiousAffiliation: "",
      formerSchool: "",
      disabilityStatus: null,
      disabilityInfo: "",
      dateCreated: null,
      dateUpdated: null,
      createdBy: null,
      updatedBy: null,
    },
  ],
  studentList: {
    mlanglois: {
      id: 1,
      uid: "mlanglois",
      firstName: "Mariele",
      lastName: "L' Anglois",
      gender: "Female",
      grade: "n1",
      tuitionOwed: 250,
    },
    lkenset: {
      id: 2,
      uid: "lkenset",
      firstName: "Lucais",
      lastName: "Kenset",
      gender: "Male",
      grade: "n2",
      tuitionOwed: 250,
    },
    ekollach: {
      id: 3,
      uid: "ekollach",
      firstName: "Elbert",
      lastName: "Kollach",
      gender: "Male",
      grade: "kg1",
      tuitionOwed: 250,
    },
    dcastiglio: {
      id: 4,
      uid: "dcastiglio",
      firstName: "Dallon",
      lastName: "Castiglio",
      gender: "Male",
      grade: "kg2",
      tuitionOwed: 250,
    },
    forneles: {
      id: 5,
      uid: "forneles",
      firstName: "Fay",
      lastName: "Orneles",
      gender: "Female",
      grade: "p1",
      tuitionOwed: 250,
    },
    afeeham: {
      id: 6,
      uid: "afeeham",
      firstName: "Abe",
      lastName: "Feeham",
      gender: "Male",
      grade: "p2",
      tuitionOwed: 250,
    },
    jginnally: {
      id: 7,
      uid: "jginnally",
      firstName: "Josephina",
      lastName: "Ginnally",
      gender: "Female",
      grade: "p3",
      tuitionOwed: 250,
    },
    bnials: {
      id: 8,
      uid: "bnials",
      firstName: "Bordy",
      lastName: "Nials",
      gender: "Male",
      grade: "p3",
      tuitionOwed: 250,
    },
    warnauduc: {
      id: 9,
      uid: "warnauduc",
      firstName: "Ward",
      lastName: "Arnauduc",
      gender: "Male",
      grade: "p1",
      tuitionOwed: 250,
    },
    glonghi: {
      id: 10,
      uid: "glonghi",
      firstName: "Gregoire",
      lastName: "Longhi",
      gender: "Male",
      grade: "p2",
      tuitionOwed: 250,
    },
  },
};

const studentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StudentActionTypes.ADD_STUDENT_APPLICANT:
      return {
        ...state,
        studentApplicants: [
          ...state.studentApplicants,
          { ...action.payload, date_created: "today" },
        ],
      };

    default:
      return state;
  }
};

export default studentsReducer;
