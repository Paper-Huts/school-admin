import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectAdmissionsNav } from "../../redux/Navigation/NavigationSelectors";
import { addStudentApplicant } from "../../redux/Students/StudentsActions";
import { selectAdmissionStats } from "../../redux/SchoolStats/SchoolStatsSelectors";
import CurrentSchoolPeriodBar from "../CustomComponents/CurrentSchoolPeriodBar";
import Header from "../CustomComponents/Headers/Header";
import Admissions from "./Admissions";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

class AdmissionsContainer extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { addStudentApplicant } = this.props;
    const studentApplicantsRef = firestore.collection("studentApplicants");

    this.unsubscribeFromSnapshot = studentApplicantsRef.onSnapshot(
      async (snapshot) => {
        const studentApplicant = convertCollectionsSnapshotToMap(snapshot);
        addStudentApplicant(studentApplicant);
      }
    );
  }

  render() {
    const {
      admissionsNav: { header, options },
    } = this.props;

    return (
      <Container fluid>
        <Header header={header} />
        <CurrentSchoolPeriodBar />
        {options && <Admissions options={options} />}
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  admissionsNav: selectAdmissionsNav,
  admissionStats: selectAdmissionStats,
});

const mapDispatchToProps = (dispatch) => ({
  addStudentApplicant: (studentApplicant) =>
    dispatch(addStudentApplicant(studentApplicant)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdmissionsContainer);
