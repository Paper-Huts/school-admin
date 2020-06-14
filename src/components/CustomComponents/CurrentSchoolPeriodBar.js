import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentSchoolPeriod } from "../../redux/SchoolPeriod/SchoolPeriodSelectors";

import { Row, Col } from "react-bootstrap";
import styles from "../../stylesheets/CustomComponents.module.css";

const CurrentSchoolPeriodBar = ({ currentSchoolPeriod }) => {

  const { academicYear, academicTerm, date } = currentSchoolPeriod;

  return (
    <Row>
        <Col md={4} className={styles.period}>
          <span className={styles.periodTitle}>Academic Year</span>
          :&nbsp;&nbsp;
          <span className={styles.periodValue}>{academicYear}</span>
        </Col>
        <Col md={4} className={styles.period}>
          <span className={styles.periodTitle}>Term</span>
          :&nbsp;&nbsp;
          <span className={styles.periodValue}>{academicTerm}</span>
        </Col>
        <Col md={4} className={styles.period}>
          <span className={styles.periodTitle}>Date</span>
          :&nbsp;&nbsp;
          <span className={styles.periodValue}>{date}</span>
        </Col>
    </Row>
  );
};

const mapStateToProps = createStructuredSelector({
  currentSchoolPeriod: selectCurrentSchoolPeriod,
});

export default connect(mapStateToProps)(CurrentSchoolPeriodBar);
