import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Container, Row, Col } from "react-bootstrap";
import Header from "../../CustomComponents/Header";
import CurrentSchoolPeriodBar from "../../CustomComponents/CurrentSchoolPeriodBar";

import { selectTuitionByGradeForList } from "../../../redux/Tuition/TuitionSelectors";

import styles from "../../../stylesheets/CustomComponents.module.css";

const GradeTuition = ({tuitionByGradeLevel}) => {
  return(
    <Container>
      <Header header="Tuition Update" />
      <CurrentSchoolPeriodBar />
        <Row className={styles.subSection}>
          {tuitionByGradeLevel.map((tuition) => (
            <Col key={tuition.id} md={6} xs={12}>
              <h4>{tuition.gradeLevel}</h4>
              <ul>
                <li>Tuition - GHC {tuition.costOfTuition}</li>
                <li>
                  Book & Stationery - GHC {tuition.costOfBooksAndStationery}
                </li>
                <li>Misc Items - GHC {tuition.costOfMiscItems}</li>
              </ul>
            </Col>
          ))}
        </Row>
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  tuitionByGradeLevel: selectTuitionByGradeForList
});

export default connect(mapStateToProps)(GradeTuition);