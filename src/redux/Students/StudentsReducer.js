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
      first_name: "Mariele",
      last_name: "L' Anglois",
      gender: "Female",
    },
    lkenset: {
      id: 2,
      uid: "lkenset",
      first_name: "Lucais",
      last_name: "Kenset",
      gender: "Male",
    },
    ekollach: {
      id: 3,
      uid: "ekollach",
      first_name: "Elbert",
      last_name: "Kollach",
      gender: "Male",
    },
    dcastiglio: {
      id: 4,
      uid: "dcastiglio",
      first_name: "Dallon",
      last_name: "Castiglio",
      gender: "Male",
    },
    forneles: {
      id: 5,
      uid: "forneles",
      first_name: "Fay",
      last_name: "Orneles",
      gender: "Female",
    },
    afeeham: {
      id: 6,
      uid: "afeeham",
      first_name: "Abe",
      last_name: "Feeham",
      gender: "Male",
    },
    jginnally: {
      id: 7,
      uid: "jginnally",
      first_name: "Josephina",
      last_name: "Ginnally",
      gender: "Female",
    },
    bnials: {
      id: 8,
      uid: "bnials",
      first_name: "Bordy",
      last_name: "Nials",
      gender: "Male",
    },
    warnauduc: {
      id: 9,
      uid: "warnauduc",
      first_name: "Ward",
      last_name: "Arnauduc",
      gender: "Male",
    },
    glonghi: {
      id: 10,
      uid: "glonghi",
      first_name: "Gregoire",
      last_name: "Longhi",
      gender: "Male",
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
