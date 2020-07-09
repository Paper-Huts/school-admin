import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectTuitionByGradeForList } from "./../../redux/Tuition/TuitionSelectors";

import { Container, Row, Col } from "react-bootstrap";
import styles from "../../stylesheets/pages.module.css";

import LargeButton from "../CustomComponents/LargeButton";
import Header from "../CustomComponents/Header";
import CurrentSchoolPeriodBar from "../CustomComponents/CurrentSchoolPeriodBar";

import { pageData } from "../../tests/data/TuitionPageData";

const Tuition = () => {
  const { subPages, title } = pageData;

  return (
    <div className={styles.pageBody}>
      <Container fluid>
        <Header header={title} />
        <CurrentSchoolPeriodBar />
        <Row className={styles.optionsBar}>
          {subPages.map(({ id, title, path }) => (
            <Col key={id}>
              <LargeButton path={path} label={title} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  tuitionByGradeLevel: selectTuitionByGradeForList,
});

export default connect(mapStateToProps)(Tuition);
