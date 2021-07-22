import NavigationActionTypes from "./NavigationActionTypes";

const INITIAL_STATE = {
  navBrand: { id: 0, title: "School Admin", path: "/" },
  navItems: [
    { id: 1, title: "Admissions", path: "/admissions" },
    { id: 2, title: "Tuition", path: "/tuition" },
    { id: 3, title: "Teachers", path: "/teachers" },
  ],
  admissionsNav: {
    header: "Admissions",
    options: [
      {
        id: 1,
        title: "New Student Application",
        path: "/admissions/new_student",
      },
      {
        id: 2,
        title: "Update Student Info",
        path: "admissions/update_student_info",
      },
    ],
  },
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavigationActionTypes.MAIN_NAVIGATION:
      return { ...state.navBrand, ...state.navItems };
    case NavigationActionTypes.ADMISSIONS_OPTIONS:
      return state.admissionsNav;
    default:
      return state;
  }
};

export default navigationReducer;
