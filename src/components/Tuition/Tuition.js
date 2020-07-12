import React from "react";

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

export default Tuition;
