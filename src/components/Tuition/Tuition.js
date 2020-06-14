import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectTuitionByGradeLevel } from "./../../redux/Tuition/TuitionSelectors";

import { Container, Row, Col } from "react-bootstrap";
import styles from "../../stylesheets/pages.module.css";

import SubHeader from "../CustomComponents/SubHeader";
import LargeButton from "../CustomComponents/LargeButton";

import { pageData } from "../../tests/data/TuitionPageData";

const Tuition = ({ tuitionByGradeLevel }) => {

  const { subPages } = pageData;

  return (
    <div className={styles.pageBody}>
      <Container fluid>
        <Row className={styles.optionsBar}>
          {subPages.map(({ id, title, path }) => (
            <Col key={id}>
              <LargeButton path={path} label={title} />
            </Col>
          ))}
        </Row>
        <SubHeader subHeader="School Fees Information" />
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
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  tuitionByGradeLevel: selectTuitionByGradeLevel,
});

export default connect(mapStateToProps)(Tuition);
