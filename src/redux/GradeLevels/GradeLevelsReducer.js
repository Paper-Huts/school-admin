const INITIAL_STATE = {
  gradeLevels: {
    n1: {
      id: 1,
      name: "nursery 1",
      gradeCode: "n1",
      numberOfStudents: 0,
      homeRoomTeacher: ""
    },
    n2: {
      id: 2,
      name: "nursery 2",
      gradeCode: "n2",
      numberOfStudents: 0,
      homeRoomTeacher: ""
    },
    kg1: {
      id: 3,
      name: "kindergarten 1",
      gradeCode: "kg1",
      numberOfStudents: 0,
      homeRoomTeacher: ""
    },
    kg2: {
      id: 4,
      name: "kindergarten 2",
      gradeCode: "kg2",
      numberOfStudents: 0,
      homeRoomTeacher: ""
    },
    p1: {
      id: 5,
      name: "primary 1",
      gradeCode: "p1",
      numberOfStudents: 0,
      homeRoomTeacher: ""
    },
    p2: {
      id: 6,
      name: "primary 2",
      gradeCode: "p2",
      numberOfStudents: 0,
      homeRoomTeacher: ""
    },
    p3: {
      id: 7,
      name: "primary 3",
      gradeCode: "p3",
      numberOfStudents: 0,
      homeRoomTeacher: ""
    },
  }
}

const gradeLevelsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  
    default:
      return state;
  }
}

export default gradeLevelsReducer;